.. _manual_nscp_checks-index:

#######
 Checks
#######

Using NSClient++ is checks is also pretty straight forward but at the same time not.
Most check have what is refereed to as sensible defaults this means without arguments most checks will do "something" that is "sensible".
This means that to get you started check_cpu will just work as-is. But when you need to do something slightly different you have to start to use the check expressions.

It is important to note that NSClient++ has been around for a long time and the syntax for the checks has changed over time.
With version 0.4.2 an effort was made to harmonize and rewrite this thus in all subsequent version the syntax is new but on the other hand the syntax is  the same in all checks and fairly future proof so hopefully the checks you write to day will be around for a long time.
There is a lot of old out dated information about there about the old syntax which is: plain wrong so if you find something about max-warn, filter+ or such: just forget all about it.

Check basics
------------

In it simplest form most checks will just work::

    check_cpu
    L        cli OK: OK: CPU load is ok.
    L        cli  Performance data: 'total 5m'=0%;80;90 'total 1m'=2%;80;90 'total 5s'=18%;80;90

But what if you want to change something?
What if 80% is not the warning value your interested in?
Where do I start?

The first stop is to check the default values.
The default values are best viewed in the documentation or the built-in help.
But the simplest option is to use the show-default option for the check.

Show default command line::

    check_cpu show-default
    L        cli OK: "filter=core = 'total'" "warning=load > 80" "critical=load > 90" "empty-state=ignored" "top-syntax=${status}: ${problem_list}" "ok-syntax=%(status): CPU load is ok." "detail-syntax=${time}: ${load}%" "perf-syntax=${core} ${time}"

Now changing the default value is as simple as adding the ones you do not like with a changed option.
Lets say you want to change warning threshold from 80 to 30 you can do so simply by taking *warn=used > 80%* changing it to the threshold you want *warn=used > 30%*.
Now add this to the command line of the old command and run that.

Modified thresholds::

    check_cpu "warn=used>30%"
    L        cli OK: OK: CPU load is ok.
    L        cli  Performance data: 'total 5m'=0%;30;90 'total 1m'=2%;30;90 'total 5s'=18%;30;90

Now don't go adding *ALL* the default values, they are default for a reason: they are sensible so adding all default values might break things in the future if thing change.
Just add the ones you need. On the other hand if you want to keep using an "old" version you can lock the check by using all the default values.

What about removing default values?
===================================

Sometimes you want to negate the default value by leaving it empty. This might seem impossible at first glance but you can always specify "none" for a given parameter to override the default value and revert back to an empty string.
For instance to remove the default filter in check_cpu you would use the following command:

Remove filters::

    check_cpu "filter=none"
    L        cli OK: OK: CPU load is ok.
    L        cli  Performance data: 'total 5m'=0%;80;90 'core 0 1m'=0%;80;90 'core 1 1m'=0%;80;90 'core 2 1m'=0%;80;90 'core 3 1m'=0%;80;90 'core 4 1m'=0%;80;90 'core 5 1m'=0%;80;90 'core 6 1m'=0%;80;90 'core 7 1m'=0%;80;90 'total 1m'=0%;80;90 'core 0 5s'=8%;80;90 'core 1 5s'=6%;80;90 'core 2 5s'=7%;80;90 'core 3 5s'=4%;80;90 'core 4 5s'=9%;80;90 'core 5 5s'=3%;80;90 'core 6 5s'=6%;80;90 'core 7 5s'=6%;80;90 'total 5s'=6%;80;90


Implicit defaults
=================

The last thing we shall discuss here is a slight snag.
Some default values are not "default value" they are "fall back values". Now this is technically a "bug" but one which might not be fixed any time soon.
So what does this mean?
Well in the above command line there was *NO* option for the default times. The check returns the values for 5 seconds, 1 minute and 5 minutes.
But where did they come from?
Well, they are a "implicit values" if a check does not have a dataset a fall back one will be used. These options are almost always related to the data set used.
So for instance check_drivesize will not have a default option for what to check.
To get around this we need simply check the key in the documentation and add it:

Different timings::

    check_cpu time=10m time=5m time=1m
    L        cli OK: OK: CPU load is ok.
    L        cli  Performance data: 'total 10m'=8%;80;90 'total 5m'=16%;80;90 'total 1m'=16%;80;90

Now this is the basics of writing checks with NSClient++. Hopefully you will be able to tinker your way to success from here.
And in the next few chapters we will add some deeper understanding on how the filters and thresholds work in NSClient++ so stay tuned for more.

Expressions
-----------

The core feature of the NSCLient++ filter and check language is an expression.
This expression is modelled after SQL Where clauses and in essence you write an expression which is what will be used.

To look at this we will start with the basics modifying warn/crit threshold checks.
We already sis this above when we modified the default thresholds:

Modified thresholds::

    check_cpu "warn=used>30%"
    L        cli OK: OK: CPU load is ok.
    L        cli  Performance data: 'total 5m'=0%;30;90 'total 1m'=2%;30;90 'total 5s'=18%;30;90

But we are not limited to such simple expressions. Expressions are written in what I would call natural language form: This means you write the left and on the left hand side then an operator followed by a right hand side of the operator.
For instance foo = bar means "foo is equal to bar".
All expressions define the outcome in other words warn=1=1 means we always have a warning (as 1=1) thus whenever an expression is true the state the expression is used for is also true.

The operators available are:

====== =============== ====================== ===========================
Sign   Safe expression Operator               Example
====== =============== ====================== ===========================
and    and             and                    1 = 1 and 2 = 2
or     or              or                     1 = 1 or 1 = 2
=      eq              equals                 1 = 1
!=     ne              not equals             1 = 1
>      gt              grater than            3 > 1
<      lt              less than              1 < 3
<=     le              less than or equals    1 <= 1
>=     ge              grater than or equals  1 >= 1
like   like            sub string matching    'foo' like 'football'
regexp regexp          regular expression     '$foo.*' regexp 'football'
''     str()           constant               'foo'
not    not             negate operator        1 = 1 and not 2 = 3
====== =============== ====================== ===========================

The safe version of an operator is only to allow expression to be used even when nasty arguments are not allowed but they can also be useful to reduce escaping issue on the Nagios side where all arguments are potentially escaped by the shell.
The are identical to their unsafe versions apart from the characters used to type them.

The keywords available are different for each check and you can always check the various documentation to see a list of available expression for a given check.
For instance for check_cpu we have.

Check related keywords:

* core
* core_id
* idle
* kernel
* load
* time

Generic keywords:

* count
* total
* ok_count
* warn_count
* crit_count
* problem_count
* list
* ok_list
* warn_list
* crit_list
* problem_list
* detail_list
* status

The check related keywords are always unique where as the generic ones are there for all checks and usually work on the data set (aggregation).
One other thing to know about keywords are that they are typed and there is coercion.

For instance some size expression will accept a unit suffix (kmbgt) to which will be expanded by the expression parser.
Thus writing 5k is equal to writing 5120 but only for size expressions.

Filters
-------

Filtering works much like expression above except that filters define what to include in a check.
While there are multiple filters the most common one to use is filter which defined the objects you are interested in.
We already saw a quick example in the check_cpu command above. The default filter was:

The default check_cpu filter::

    "filter=core = 'total'"

What this does is exclude all information which is not coming from the core "total". In the check_cpu command there a re values for each core as well as an aggregated total value.
This the above only shows us the total load and the load for each individual core is never used in the check command.

Writing filters work exactly like the warning and critical expression we have seen before so we wont cover that again here.

Advanced options
----------------

Performance data configuration
==============================

Performance data is something which a lot of people want to tweak and customize.
And the simplest way to do so is using the perf-config command line options.
This command line option is complicated to use as it is very free form.
It works a bit like CSS style sheets where you have selectors and lists of keys and values.
If you are not familiar with CSS this wont matter I will try to explain the concept.
But first lets take an example.

A simple performance data check::

    check_drivesize
    L        cli CRITICAL: CRITICAL ...
    L        cli  Performance data: 'C:\ used'=213.75593GB;178.77655;201.12362;0;223.47069 'C:\ used %'=95%;79;89;0;100 'D:\ used'=400.62005GB;372.60702;419.1829;0;465.75878 'D:\ used %79;89;0;100 'E:\ used'=0B;0;0;0;0

The performance data here is quite long so lets break it up into a table. To do this we can use a built in helper function in NSCLient++.
The function format_perf will execute another command and render the performance data as the return message.

Formatted performance data::

    render_perf remove-perf command=check_drivesize
    OK: OK:
      C:\ used      213.605 GB      178.777 201.124 223.471 0
    , C:\ used %    95      %       79      89      100     0
    , D:\ used      400.713 GB      372.607 419.183 465.759 0
    , D:\ used %    86      %       79      89      100     0
    , E:\ used      0       B       0       0       0       0

Now we can see we have several types of performance data for each drive. We have "used" and we have "used %".
Both of these can be configured individually and the way to access them is by their "suffix" which is "used" and "used %".

selecting based on suffix::

    "perf-config=used(...) used %(...)"

So now that we know how to select thing what can we do with them.
And this is in 0.4.3 a bit hairy as there is no documentation. But generally the following keys are available:

+----------+---------------+-------------------------------------------------+
| Key      | Value         | Description                                     |
+==========+===============+=================================================+
| ignored  | true or false | Remove the performance value from the list.     |
+----------+---------------+-------------------------------------------------+
| prefix   | string        | Change the prefix to something else.            |
+----------+---------------+-------------------------------------------------+
| suffix   | string        | Change the suffix to something else.            |
+----------+---------------+-------------------------------------------------+
| unit     | letter        | Change the unit from automatic to a given unit. |
+----------+---------------+-------------------------------------------------+

So lets start by changing the unit for our disk::

    # check_drivesize "perf-config=used(unit:G)"

    render_perf remove-perf command=check_drivesize arguments "perf-config=used(unit:G)"
    OK: OK:
      C:\ used      213.607 G       178.777 201.124 223.471 0
    , C:\ used %    95      %       79      89      100     0
    , D:\ used      400.713 G       372.607 419.183 465.759 0
    , D:\ used %    86      %       79      89      100     0
    , E:\ used      0       G       0       0       0       0

Next lets remove the percentages::

    # check_drivesize "perf-config=used(unit:G) used %(ignored:true)"

    render_perf remove-perf command=check_drivesize arguments "perf-config=used(unit:G) used %(ignored:true)"
    OK: OK:
      C:\ used      213.607 G       178.777 201.124 223.471 0
    , D:\ used      400.713 G       372.607 419.183 465.759 0
    , E:\ used      0       G       0       0       0       0

The last thing we will do is remove the suffix::

    # check_drivesize "perf-config=used(unit:G;suffix:'') used %(ignored:true)"

    render_perf remove-perf command=check_drivesize arguments "perf-config=used(unit:G;suffix:'') used %(ignored:true)"
    OK: OK:
      C:\   213.612 G       178.777 201.124 223.471 0
    , C:\   95      %       79      89      100     0
    , D:\   400.781 G       372.607 419.183 465.759 0
    , D:\   86      %       79      89      100     0
    , E:\   0       G       0       0       0       0

Now this is not what we expected: right?
Why did the 5:ages get back? End even worse why were they renamed "c:".
The reason for this is simple. Selection is done on multiple levels. We match (in the following order)

# <prefix>.<object>.<suffix>
# <prefix>.<object>
# <object>.<suffix>
# <prefix>
# <suffix>
# <object>

So what are the various suffixes and prefixes?
Well in the case of check_drivesize they are:

+------------+--------+--------+--------+
| Value      | Prefix | Object | Suffix |
+============+========+========+========+
| C:\ used   |        | used   | used   |
+------------+--------+--------+--------+
| C:\ used % |        | used   | used % |
+------------+--------+--------+--------+
| D:\ free   |        | free   | free   |
+------------+--------+--------+--------+
| D:\ free % |        | free   | free % |
+------------+--------+--------+--------+

So using "used" as a stand along selector is a bit bad since we match BOTH used and used %.
And usually this is fine, setting the unit for %:s does not change anything and thus "it works".
If we want to differentiate between them we need to use a dot notation syntax which looks like this: <prefix>.<object>.<suffix>.
As we saw above they are tried in various combination so leaving out something should get us a broader selection.

Correct selection::

    # check_drivesize "perf-config=used.used(unit:G;suffix:'') used %(ignored:true)"

    render_perf remove-perf command=check_drivesize arguments "perf-config=used.used(unit:G;suffix:'') used %(ignored:true)"
    OK: OK:
      C:\    213.593 G      178.777 201.124 223.471 0
    , D:\   400.8   G       372.607 419.183 465.759 0
    , E:\   0       G       0       0       0       0

Now it works just as expected and hopefully it will do so for you as well.
