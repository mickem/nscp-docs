# CheckEventLog

Check for errors and warnings in the event log.

## Query list

A list of all available queries (check commands)

| Command | Description|
| ------- | -----------|
| [check_eventlog](#check_eventlog) | Check for errors in the event log.|
| [checkeventlog](#checkeventlog) | Legacy version of check_eventlog|




## Command list

**TODO:** Add a list of all external commands (this is not check commands)

## Configuration list


Common Keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/eventlog](#/settings/eventlog) | [buffer size](#/settings/eventlog_buffer size) | BUFFER_SIZE|
| [/settings/eventlog](#/settings/eventlog) | [debug](#/settings/eventlog_debug) | DEBUG|
| [/settings/eventlog](#/settings/eventlog) | [lookup names](#/settings/eventlog_lookup names) | LOOKUP NAMES|
| [/settings/eventlog](#/settings/eventlog) | [syntax](#/settings/eventlog_syntax) | SYNTAX|
| [/settings/eventlog/real-time](#/settings/eventlog/real-time) | [debug](#/settings/eventlog/real-time_debug) | DEBUG|
| [/settings/eventlog/real-time](#/settings/eventlog/real-time) | [enabled](#/settings/eventlog/real-time_enabled) | REAL TIME CHECKING|
| [/settings/eventlog/real-time](#/settings/eventlog/real-time) | [log](#/settings/eventlog/real-time_log) | LOGS TO CHECK|
| [/settings/eventlog/real-time](#/settings/eventlog/real-time) | [startup age](#/settings/eventlog/real-time_startup age) | STARTUP AGE|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [command](#/settings/eventlog/real-time/filters/default_command) | COMMAND NAME|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [critical](#/settings/eventlog/real-time/filters/default_critical) | CRITICAL FILTER|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [destination](#/settings/eventlog/real-time/filters/default_destination) | DESTINATION|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [detail syntax](#/settings/eventlog/real-time/filters/default_detail syntax) | SYNTAX|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [empty message](#/settings/eventlog/real-time/filters/default_empty message) | EMPTY MESSAGE|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [filter](#/settings/eventlog/real-time/filters/default_filter) | FILTER|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [log](#/settings/eventlog/real-time/filters/default_log) | FILE|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [maximum age](#/settings/eventlog/real-time/filters/default_maximum age) | MAGIMUM AGE|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [ok](#/settings/eventlog/real-time/filters/default_ok) | OK FILTER|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [ok syntax](#/settings/eventlog/real-time/filters/default_ok syntax) | SYNTAX|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [severity](#/settings/eventlog/real-time/filters/default_severity) | SEVERITY|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [target](#/settings/eventlog/real-time/filters/default_target) | DESTINATION|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [top syntax](#/settings/eventlog/real-time/filters/default_top syntax) | SYNTAX|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [warning](#/settings/eventlog/real-time/filters/default_warning) | WARNING FILTER|

Advanced keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [debug](#/settings/eventlog/real-time/filters/default_debug) | DEBUG|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [escape html](#/settings/eventlog/real-time/filters/default_escape html) | ESCAPE HTML|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [logs](#/settings/eventlog/real-time/filters/default_logs) | FILES|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [perf config](#/settings/eventlog/real-time/filters/default_perf config) | PERF CONFIG|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [source id](#/settings/eventlog/real-time/filters/default_source id) | SOURCE ID|
| [/settings/eventlog/real-time/filters/default](#/settings/eventlog/real-time/filters/default) | [target id](#/settings/eventlog/real-time/filters/default_target id) | TARGET ID|

Sample keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [command](#/settings/eventlog/real-time/filters/sample_command) | COMMAND NAME|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [critical](#/settings/eventlog/real-time/filters/sample_critical) | CRITICAL FILTER|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [debug](#/settings/eventlog/real-time/filters/sample_debug) | DEBUG|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [destination](#/settings/eventlog/real-time/filters/sample_destination) | DESTINATION|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [detail syntax](#/settings/eventlog/real-time/filters/sample_detail syntax) | SYNTAX|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [empty message](#/settings/eventlog/real-time/filters/sample_empty message) | EMPTY MESSAGE|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [escape html](#/settings/eventlog/real-time/filters/sample_escape html) | ESCAPE HTML|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [filter](#/settings/eventlog/real-time/filters/sample_filter) | FILTER|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [log](#/settings/eventlog/real-time/filters/sample_log) | FILE|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [logs](#/settings/eventlog/real-time/filters/sample_logs) | FILES|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [maximum age](#/settings/eventlog/real-time/filters/sample_maximum age) | MAGIMUM AGE|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [ok](#/settings/eventlog/real-time/filters/sample_ok) | OK FILTER|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [ok syntax](#/settings/eventlog/real-time/filters/sample_ok syntax) | SYNTAX|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [perf config](#/settings/eventlog/real-time/filters/sample_perf config) | PERF CONFIG|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [severity](#/settings/eventlog/real-time/filters/sample_severity) | SEVERITY|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [source id](#/settings/eventlog/real-time/filters/sample_source id) | SOURCE ID|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [target](#/settings/eventlog/real-time/filters/sample_target) | DESTINATION|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [target id](#/settings/eventlog/real-time/filters/sample_target id) | TARGET ID|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [top syntax](#/settings/eventlog/real-time/filters/sample_top syntax) | SYNTAX|
| [/settings/eventlog/real-time/filters/sample](#/settings/eventlog/real-time/filters/sample) | [warning](#/settings/eventlog/real-time/filters/sample_warning) | WARNING FILTER|



## Samples


#### Realtime monitoring

Setting up real time monitoring can be a bit daunting for first time users.
But it is not as difficult as it might seem.

The basic idea is depict in the following figure.

We have a filter which listens to event log entries.
These entries are (when they matched) turned into messages and statuses which is then sent onward to various channels.
On the other end of these channels are (hopefully) someone who is interested in the message.

In most cases the first channel you are interested in is NSCA which is the default name where the NSCACLient listenes.
It will in turn foirward all incoming messages on to Nagios via NSCA.

So in short we need to configure three things

* Activate real time filtering
* Add a filter which listenes for events
* Setup a destination

#### Enabling realtime filtering

To setup real time filtering we only need a single flag (as well as the eventlog module).

configuration:
```
[/modules]
CheckEventLog=enabled

[/settings/eventlog/real-time]
realtime = enabled
```

Adding this will not do much since we dont have a filter yet but adding one is pretty simple as well so lets go ahead and do that.

configuration:
```
[/settings/eventlog/real-time/filters/foo]
#... TODO
```

If we were to test this (and please do go ahead) we would start getting warning on the concole about no one listening to our events.

But no we end up in a strange situation, how can we actually test this configuration?
How can we generate messages in the windows eventlog?
Fortunetly NSClient++ can help us there as well.

execute the following to inser an error into the everntlog:

```
# TODO
```

# Queries

A quick reference for all available queries (check commands) in the CheckEventLog module.

## check_eventlog

Check for errors in the event log.


### Usage



| Option | Default Value | Description|
| ------ | ------------- | -----------|
| [filter](#check_eventlog_filter) | level in ('warning', 'error', 'critical') | Filter which marks interesting items.|
| [warning](#check_eventlog_warning) | level = 'warning', problem_count > 0 | Filter which marks items which generates a warning state.|
| [warn](#check_eventlog_warn) |  | Short alias for warning|
| [critical](#check_eventlog_critical) | level in ('error', 'critical') | Filter which marks items which generates a critical state.|
| [crit](#check_eventlog_crit) |  | Short alias for critical.|
| [ok](#check_eventlog_ok) |  | Filter which marks items which generates an ok state.|
| [debug](#check_eventlog_debug) | N/A | Show debugging information in the log|
| [show-all](#check_eventlog_show-all) | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).|
| [empty-state](#check_eventlog_empty-state) | ok | Return status to use when nothing matched filter.|
| [perf-config](#check_eventlog_perf-config) | level(ignored:true) | Performance data generation configuration|
| [escape-html](#check_eventlog_escape-html) | N/A | Escape any < and > characters to prevent HTML encoding|
| [help](#check_eventlog_help) | N/A | Show help screen (this screen)|
| [help-pb](#check_eventlog_help-pb) | N/A | Show help screen as a protocol buffer payload|
| [show-default](#check_eventlog_show-default) | N/A | Show default values for a given command|
| [help-short](#check_eventlog_help-short) | N/A | Show help screen (short format).|
| [unique-index](#check_eventlog_unique-index) |  | Unique syntax.|
| [top-syntax](#check_eventlog_top-syntax) | ${status}: ${count} message(s) ${problem_list} | Top level syntax.|
| [ok-syntax](#check_eventlog_ok-syntax) | %(status): Event log seems fine | ok syntax.|
| [empty-syntax](#check_eventlog_empty-syntax) | %(status): No entries found | Empty syntax.|
| [detail-syntax](#check_eventlog_detail-syntax) | ${file} ${source} (${message}) | Detail level syntax.|
| [perf-syntax](#check_eventlog_perf-syntax) | ${file}_${source} | Performance alias syntax.|
| [file](#check_eventlog_file) |  | File to read (can be specified multiple times to check multiple files.|
| [log](#check_eventlog_log) |  | Same as file|
| [scan-range](#check_eventlog_scan-range) |  | Date range to scan.|
| [truncate-message](#check_eventlog_truncate-message) |  | Maximum length of message for each event log message text.|
| [unique](#check_eventlog_unique) | 1 | Shorthand for setting default unique index: ${log}-${source}-${id}.|


<a name="check_eventlog_filter"/>
### filter


**Deafult Value:** level in ('warning', 'error', 'critical')

**Description:**
Filter which marks interesting items.
Interesting items are items which will be included in the check.
They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.


<a name="check_eventlog_warning"/>
### warning


**Deafult Value:** level = 'warning', problem_count > 0

**Description:**
Filter which marks items which generates a warning state.
If anything matches this filter the return status will be escalated to warning.


<a name="check_eventlog_warn"/>
### warn



**Description:**
Short alias for warning

<a name="check_eventlog_critical"/>
### critical


**Deafult Value:** level in ('error', 'critical')

**Description:**
Filter which marks items which generates a critical state.
If anything matches this filter the return status will be escalated to critical.


<a name="check_eventlog_crit"/>
### crit



**Description:**
Short alias for critical.

<a name="check_eventlog_ok"/>
### ok



**Description:**
Filter which marks items which generates an ok state.
If anything matches this any previous state for this item will be reset to ok.
Available options : 

| Key            | Value                                                                                                          | |
| -------------- | -------------------------------------------------------------------------------------------------------------- | |
| count          | Number of items matching the filter. Common option for all checks.                                             | |
| total          |  Total number of items. Common option for all checks.                                                          | |
| ok_count       |  Number of items matched the ok criteria. Common option for all checks.                                        | |
| warn_count     |  Number of items matched the warning criteria. Common option for all checks.                                   | |
| crit_count     |  Number of items matched the critical criteria. Common option for all checks.                                  | |
| problem_count  |  Number of items matched either warning or critical criteria. Common option for all checks.                    | |
| list           |  A list of all items which matched the filter. Common option for all checks.                                   | |
| ok_list        |  A list of all items which matched the ok criteria. Common option for all checks.                              | |
| warn_list      |  A list of all items which matched the warning criteria. Common option for all checks.                         | |
| crit_list      |  A list of all items which matched the critical criteria. Common option for all checks.                        | |
| problem_list   |  A list of all items which matched either the critical or the warning criteria. Common option for all checks.  | |
| detail_list    |  A special list with critical, then warning and finally ok. Common option for all checks.                      | |
| status         |  The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     | |
| category       | TODO                                                                                                           | |
| computer       | Which computer generated the message                                                                           | |
| customer       | TODO                                                                                                           | |
| file           | The logfile name                                                                                               | |
| guid           | The logfile name                                                                                               | |
| id             | Eventlog id                                                                                                    | |
| keyword        | The keyword associated with this event                                                                         | |
| level          | Severity level (error, warning, info, success, auditSucess, auditFailure)                                      | |
| log            | alias for file                                                                                                 | |
| message        | The message rendered as a string.                                                                              | |
| provider       | Source system.                                                                                                 | |
| rawid          | Raw message id (contains many other fields all baked into a single number)                                     | |
| source         | Source system.                                                                                                 | |
| task           | The type of event (task)                                                                                       | |
| type           | alias for level (old, deprecated)                                                                              | |
| written        | When the message was written to file                                                                           | |







<a name="check_eventlog_debug"/>
### debug



**Description:**
Show debugging information in the log

<a name="check_eventlog_show-all"/>
### show-all



**Description:**
Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

<a name="check_eventlog_empty-state"/>
### empty-state


**Deafult Value:** ok

**Description:**
Return status to use when nothing matched filter.
If no filter is specified this will never happen unless the file is empty.

<a name="check_eventlog_perf-config"/>
### perf-config


**Deafult Value:** level(ignored:true)

**Description:**
Performance data generation configuration
TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

<a name="check_eventlog_escape-html"/>
### escape-html



**Description:**
Escape any < and > characters to prevent HTML encoding

<a name="check_eventlog_help"/>
### help



**Description:**
Show help screen (this screen)

<a name="check_eventlog_help-pb"/>
### help-pb



**Description:**
Show help screen as a protocol buffer payload

<a name="check_eventlog_show-default"/>
### show-default



**Description:**
Show default values for a given command

<a name="check_eventlog_help-short"/>
### help-short



**Description:**
Show help screen (short format).

<a name="check_eventlog_unique-index"/>
### unique-index



**Description:**
Unique syntax.
Used to filter unique items (counted will still increase but messages will not repeaters: 

| Key       | Value                                                                       | |
| --------- | --------------------------------------------------------------------------- | |
| category  | TODO                                                                        | |
| computer  | Which computer generated the message                                        | |
| customer  | TODO                                                                        | |
| file      | The logfile name                                                            | |
| guid      | The logfile name                                                            | |
| id        | Eventlog id                                                                 | |
| keyword   | The keyword associated with this event                                      | |
| level     | Severity level (error, warning, info, success, auditSucess, auditFailure)   | |
| log       | alias for file                                                              | |
| message   | The message rendered as a string.                                           | |
| provider  | Source system.                                                              | |
| rawid     | Raw message id (contains many other fields all baked into a single number)  | |
| source    | Source system.                                                              | |
| task      | The type of event (task)                                                    | |
| type      | alias for level (old, deprecated)                                           | |
| written   | When the message was written to file                                        | |






<a name="check_eventlog_top-syntax"/>
### top-syntax


**Deafult Value:** ${status}: ${count} message(s) ${problem_list}

**Description:**
Top level syntax.
Used to format the message to return can include text as well as special keywords which will include information from the checks.
To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
The available keywords are: 

| Key            | Value                                                                                                          | |
| -------------- | -------------------------------------------------------------------------------------------------------------- | |
| count          | Number of items matching the filter. Common option for all checks.                                             | |
| total          |  Total number of items. Common option for all checks.                                                          | |
| ok_count       |  Number of items matched the ok criteria. Common option for all checks.                                        | |
| warn_count     |  Number of items matched the warning criteria. Common option for all checks.                                   | |
| crit_count     |  Number of items matched the critical criteria. Common option for all checks.                                  | |
| problem_count  |  Number of items matched either warning or critical criteria. Common option for all checks.                    | |
| list           |  A list of all items which matched the filter. Common option for all checks.                                   | |
| ok_list        |  A list of all items which matched the ok criteria. Common option for all checks.                              | |
| warn_list      |  A list of all items which matched the warning criteria. Common option for all checks.                         | |
| crit_list      |  A list of all items which matched the critical criteria. Common option for all checks.                        | |
| problem_list   |  A list of all items which matched either the critical or the warning criteria. Common option for all checks.  | |
| detail_list    |  A special list with critical, then warning and finally ok. Common option for all checks.                      | |
| status         |  The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     | |






<a name="check_eventlog_ok-syntax"/>
### ok-syntax


**Deafult Value:** %(status): Event log seems fine

**Description:**
ok syntax.
DEPRECATED! This is the syntax for when an ok result is returned.
This value will not be used if your syntax contains %(list) or %(count).

<a name="check_eventlog_empty-syntax"/>
### empty-syntax


**Deafult Value:** %(status): No entries found

**Description:**
Empty syntax.
DEPRECATED! This is the syntax for when nothing matches the filter.
Possible values are: 

| Key            | Value                                                                                                          | |
| -------------- | -------------------------------------------------------------------------------------------------------------- | |
| count          | Number of items matching the filter. Common option for all checks.                                             | |
| total          |  Total number of items. Common option for all checks.                                                          | |
| ok_count       |  Number of items matched the ok criteria. Common option for all checks.                                        | |
| warn_count     |  Number of items matched the warning criteria. Common option for all checks.                                   | |
| crit_count     |  Number of items matched the critical criteria. Common option for all checks.                                  | |
| problem_count  |  Number of items matched either warning or critical criteria. Common option for all checks.                    | |
| list           |  A list of all items which matched the filter. Common option for all checks.                                   | |
| ok_list        |  A list of all items which matched the ok criteria. Common option for all checks.                              | |
| warn_list      |  A list of all items which matched the warning criteria. Common option for all checks.                         | |
| crit_list      |  A list of all items which matched the critical criteria. Common option for all checks.                        | |
| problem_list   |  A list of all items which matched either the critical or the warning criteria. Common option for all checks.  | |
| detail_list    |  A special list with critical, then warning and finally ok. Common option for all checks.                      | |
| status         |  The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     | |






<a name="check_eventlog_detail-syntax"/>
### detail-syntax


**Deafult Value:** ${file} ${source} (${message})

**Description:**
Detail level syntax.
Used to format each resulting item in the message.
%(list) will be replaced with all the items formated by this syntax string in the top-syntax.
To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
The available keywords are: 

| Key       | Value                                                                       | |
| --------- | --------------------------------------------------------------------------- | |
| category  | TODO                                                                        | |
| computer  | Which computer generated the message                                        | |
| customer  | TODO                                                                        | |
| file      | The logfile name                                                            | |
| guid      | The logfile name                                                            | |
| id        | Eventlog id                                                                 | |
| keyword   | The keyword associated with this event                                      | |
| level     | Severity level (error, warning, info, success, auditSucess, auditFailure)   | |
| log       | alias for file                                                              | |
| message   | The message rendered as a string.                                           | |
| provider  | Source system.                                                              | |
| rawid     | Raw message id (contains many other fields all baked into a single number)  | |
| source    | Source system.                                                              | |
| task      | The type of event (task)                                                    | |
| type      | alias for level (old, deprecated)                                           | |
| written   | When the message was written to file                                        | |






<a name="check_eventlog_perf-syntax"/>
### perf-syntax


**Deafult Value:** ${file}_${source}

**Description:**
Performance alias syntax.
This is the syntax for the base names of the performance data.
Possible values are: 

| Key       | Value                                                                       | |
| --------- | --------------------------------------------------------------------------- | |
| category  | TODO                                                                        | |
| computer  | Which computer generated the message                                        | |
| customer  | TODO                                                                        | |
| file      | The logfile name                                                            | |
| guid      | The logfile name                                                            | |
| id        | Eventlog id                                                                 | |
| keyword   | The keyword associated with this event                                      | |
| level     | Severity level (error, warning, info, success, auditSucess, auditFailure)   | |
| log       | alias for file                                                              | |
| message   | The message rendered as a string.                                           | |
| provider  | Source system.                                                              | |
| rawid     | Raw message id (contains many other fields all baked into a single number)  | |
| source    | Source system.                                                              | |
| task      | The type of event (task)                                                    | |
| type      | alias for level (old, deprecated)                                           | |
| written   | When the message was written to file                                        | |






<a name="check_eventlog_file"/>
### file



**Description:**
File to read (can be specified multiple times to check multiple files.
Notice that specifying multiple files will create an aggregate set you will not check each file individually.In other words if one file contains an error the entire check will result in error.

<a name="check_eventlog_log"/>
### log



**Description:**
Same as file

<a name="check_eventlog_scan-range"/>
### scan-range



**Description:**
Date range to scan.
A negative value scans backward (historical events) and a positive value scans forwards (future events). This is the approximate dates to search through this speeds up searching a lot but there is no guarantee messages are ordered.

<a name="check_eventlog_truncate-message"/>
### truncate-message



**Description:**
Maximum length of message for each event log message text.

<a name="check_eventlog_unique"/>
### unique


**Deafult Value:** 1

**Description:**
Shorthand for setting default unique index: ${log}-${source}-${id}.

## checkeventlog

Legacy version of check_eventlog


### Usage



| Option | Default Value | Description|
| ------ | ------------- | -----------|
| [help](#checkeventlog_help) | N/A | Show help screen (this screen)|
| [help-pb](#checkeventlog_help-pb) | N/A | Show help screen as a protocol buffer payload|
| [show-default](#checkeventlog_show-default) | N/A | Show default values for a given command|
| [help-short](#checkeventlog_help-short) | N/A | Show help screen (short format).|
| [MaxWarn](#checkeventlog_MaxWarn) |  | Maximum value before a warning is returned.|
| [MaxCrit](#checkeventlog_MaxCrit) |  | Maximum value before a critical is returned.|
| [MinWarn](#checkeventlog_MinWarn) |  | Minimum value before a warning is returned.|
| [MinCrit](#checkeventlog_MinCrit) |  | Minimum value before a critical is returned.|
| [warn](#checkeventlog_warn) |  | Maximum value before a warning is returned.|
| [crit](#checkeventlog_crit) |  | Maximum value before a critical is returned.|
| [filter](#checkeventlog_filter) |  | The filter to use.|
| [file](#checkeventlog_file) |  | The file to check|
| [debug](#checkeventlog_debug) | 1 | The file to check|
| [truncate](#checkeventlog_truncate) |  | Deprecated and has no meaning|
| [descriptions](#checkeventlog_descriptions) | 1 | Deprecated and has no meaning|
| [unique](#checkeventlog_unique) | 1 | |
| [syntax](#checkeventlog_syntax) | %source%, %strings% | The syntax string|
| [top-syntax](#checkeventlog_top-syntax) | ${list} | The top level syntax string|
| [scan-range](#checkeventlog_scan-range) |  | TODO|


<a name="checkeventlog_help"/>
### help



**Description:**
Show help screen (this screen)

<a name="checkeventlog_help-pb"/>
### help-pb



**Description:**
Show help screen as a protocol buffer payload

<a name="checkeventlog_show-default"/>
### show-default



**Description:**
Show default values for a given command

<a name="checkeventlog_help-short"/>
### help-short



**Description:**
Show help screen (short format).

<a name="checkeventlog_MaxWarn"/>
### MaxWarn



**Description:**
Maximum value before a warning is returned.

<a name="checkeventlog_MaxCrit"/>
### MaxCrit



**Description:**
Maximum value before a critical is returned.

<a name="checkeventlog_MinWarn"/>
### MinWarn



**Description:**
Minimum value before a warning is returned.

<a name="checkeventlog_MinCrit"/>
### MinCrit



**Description:**
Minimum value before a critical is returned.

<a name="checkeventlog_warn"/>
### warn



**Description:**
Maximum value before a warning is returned.

<a name="checkeventlog_crit"/>
### crit



**Description:**
Maximum value before a critical is returned.

<a name="checkeventlog_filter"/>
### filter



**Description:**
The filter to use.

<a name="checkeventlog_file"/>
### file



**Description:**
The file to check

<a name="checkeventlog_debug"/>
### debug


**Deafult Value:** 1

**Description:**
The file to check

<a name="checkeventlog_truncate"/>
### truncate



**Description:**
Deprecated and has no meaning

<a name="checkeventlog_descriptions"/>
### descriptions


**Deafult Value:** 1

**Description:**
Deprecated and has no meaning

<a name="checkeventlog_unique"/>
### unique


**Deafult Value:** 1

**Description:**


<a name="checkeventlog_syntax"/>
### syntax


**Deafult Value:** %source%, %strings%

**Description:**
The syntax string

<a name="checkeventlog_top-syntax"/>
### top-syntax


**Deafult Value:** ${list}

**Description:**
The top level syntax string

<a name="checkeventlog_scan-range"/>
### scan-range



**Description:**
TODO



# Configuration



## /settings/eventlog

`/settings/eventlog`

**EVENT LOG SECTION**

Section for the EventLog Checker (CheckEventLog.dll).


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [buffer size](#/settings/eventlog_buffer size) | 131072 | BUFFER_SIZE|
| [debug](#/settings/eventlog_debug) | 0 | DEBUG|
| [lookup names](#/settings/eventlog_lookup names) | 1 | LOOKUP NAMES|
| [syntax](#/settings/eventlog_syntax) |  | SYNTAX|


**Sample**::

```
# EVENT LOG SECTION
# Section for the EventLog Checker (CheckEventLog.dll).
[/settings/eventlog]
buffer size=131072
debug=0
lookup names=1
syntax=

```


<a name="/settings/eventlog_buffer size"/>
### buffer size

**BUFFER_SIZE**

The size of the buffer to use when getting messages this affects the speed and maximum size of messages you can recieve.

**Path**: /settings/eventlog

**Key**: buffer size

**Default value**: 131072

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog]
# BUFFER_SIZE
buffer size=131072
```


<a name="/settings/eventlog_debug"/>
### debug

**DEBUG**

Log more information when filtering (useful to detect issues with filters) not useful in production as it is a bit of a resource hog.

**Path**: /settings/eventlog

**Key**: debug

**Default value**: 0

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog]
# DEBUG
debug=0
```


<a name="/settings/eventlog_lookup names"/>
### lookup names

**LOOKUP NAMES**

Lookup the names of eventlog files

**Path**: /settings/eventlog

**Key**: lookup names

**Default value**: 1

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog]
# LOOKUP NAMES
lookup names=1
```


<a name="/settings/eventlog_syntax"/>
### syntax

**SYNTAX**

Set this to use a specific syntax string for all commands (that don't specify one).

**Path**: /settings/eventlog

**Key**: syntax

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog]
# SYNTAX
syntax=
```




## /settings/eventlog/real-time

`/settings/eventlog/real-time`

**CONFIGURE REALTIME CHECKING**

A set of options to configure the real time checks


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [debug](#/settings/eventlog/real-time_debug) | 0 | DEBUG|
| [enabled](#/settings/eventlog/real-time_enabled) | 0 | REAL TIME CHECKING|
| [log](#/settings/eventlog/real-time_log) | application,system | LOGS TO CHECK|
| [startup age](#/settings/eventlog/real-time_startup age) | 30m | STARTUP AGE|


**Sample**::

```
# CONFIGURE REALTIME CHECKING
# A set of options to configure the real time checks
[/settings/eventlog/real-time]
debug=0
enabled=0
log=application,system
startup age=30m

```


<a name="/settings/eventlog/real-time_debug"/>
### debug

**DEBUG**

Log missed records (useful to detect issues with filters) not useful in production as it is a bit of a resource hog.

**Path**: /settings/eventlog/real-time

**Key**: debug

**Default value**: 0

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time]
# DEBUG
debug=0
```


<a name="/settings/eventlog/real-time_enabled"/>
### enabled

**REAL TIME CHECKING**

Spawns a background thread which detects issues and reports them back instantly.

**Path**: /settings/eventlog/real-time

**Key**: enabled

**Default value**: 0

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time]
# REAL TIME CHECKING
enabled=0
```


<a name="/settings/eventlog/real-time_log"/>
### log

**LOGS TO CHECK**

Comma separated list of logs to check

**Path**: /settings/eventlog/real-time

**Key**: log

**Default value**: application,system

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time]
# LOGS TO CHECK
log=application,system
```


<a name="/settings/eventlog/real-time_startup age"/>
### startup age

**STARTUP AGE**

The initial age to scan when starting NSClient++

**Path**: /settings/eventlog/real-time

**Key**: startup age

**Default value**: 30m

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time]
# STARTUP AGE
startup age=30m
```




## /settings/eventlog/real-time/filters

`/settings/eventlog/real-time/filters`

**REALTIME FILTERS**

A set of filters to use in real-time mode




**Sample**::

```
# REALTIME FILTERS
# A set of filters to use in real-time mode
[/settings/eventlog/real-time/filters]

```




## /settings/eventlog/real-time/filters/default

`/settings/eventlog/real-time/filters/default`

**REAL TIME FILTER DEFENITION**

Definition for real time filter: 


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [command](#/settings/eventlog/real-time/filters/default_command) |  | COMMAND NAME|
| [critical](#/settings/eventlog/real-time/filters/default_critical) |  | CRITICAL FILTER|
| [debug](#/settings/eventlog/real-time/filters/default_debug) | 0 | DEBUG|
| [destination](#/settings/eventlog/real-time/filters/default_destination) |  | DESTINATION|
| [detail syntax](#/settings/eventlog/real-time/filters/default_detail syntax) |  | SYNTAX|
| [empty message](#/settings/eventlog/real-time/filters/default_empty message) | eventlog found no records | EMPTY MESSAGE|
| [escape html](#/settings/eventlog/real-time/filters/default_escape html) | 0 | ESCAPE HTML|
| [filter](#/settings/eventlog/real-time/filters/default_filter) |  | FILTER|
| [log](#/settings/eventlog/real-time/filters/default_log) |  | FILE|
| [logs](#/settings/eventlog/real-time/filters/default_logs) |  | FILES|
| [maximum age](#/settings/eventlog/real-time/filters/default_maximum age) | 5m | MAGIMUM AGE|
| [ok](#/settings/eventlog/real-time/filters/default_ok) |  | OK FILTER|
| [ok syntax](#/settings/eventlog/real-time/filters/default_ok syntax) |  | SYNTAX|
| [perf config](#/settings/eventlog/real-time/filters/default_perf config) |  | PERF CONFIG|
| [severity](#/settings/eventlog/real-time/filters/default_severity) |  | SEVERITY|
| [source id](#/settings/eventlog/real-time/filters/default_source id) |  | SOURCE ID|
| [target](#/settings/eventlog/real-time/filters/default_target) |  | DESTINATION|
| [target id](#/settings/eventlog/real-time/filters/default_target id) |  | TARGET ID|
| [top syntax](#/settings/eventlog/real-time/filters/default_top syntax) |  | SYNTAX|
| [warning](#/settings/eventlog/real-time/filters/default_warning) |  | WARNING FILTER|


**Sample**::

```
# REAL TIME FILTER DEFENITION
# Definition for real time filter:
[/settings/eventlog/real-time/filters/default]
command=
critical=
debug=0
destination=
detail syntax=
empty message=eventlog found no records
escape html=0
filter=
log=
logs=
maximum age=5m
ok=
ok syntax=
perf config=
severity=
source id=
target=
target id=
top syntax=
warning=

```


<a name="/settings/eventlog/real-time/filters/default_command"/>
### command

**COMMAND NAME**

The name of the command (think nagios service name) to report up stream (defaults to alias if not set)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: command

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# COMMAND NAME
command=
```


<a name="/settings/eventlog/real-time/filters/default_critical"/>
### critical

**CRITICAL FILTER**

If any rows match this filter severity will escalated to CRITICAL

**Path**: /settings/eventlog/real-time/filters/default

**Key**: critical

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# CRITICAL FILTER
critical=
```


<a name="/settings/eventlog/real-time/filters/default_debug"/>
### debug

**DEBUG**

Enable this to display debug information for this match filter

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: debug

**Default value**: 0

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# DEBUG
debug=0
```


<a name="/settings/eventlog/real-time/filters/default_destination"/>
### destination

**DESTINATION**

The destination for intercepted messages

**Path**: /settings/eventlog/real-time/filters/default

**Key**: destination

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# DESTINATION
destination=
```


<a name="/settings/eventlog/real-time/filters/default_detail syntax"/>
### detail syntax

**SYNTAX**

Format string for dates

**Path**: /settings/eventlog/real-time/filters/default

**Key**: detail syntax

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# SYNTAX
detail syntax=
```


<a name="/settings/eventlog/real-time/filters/default_empty message"/>
### empty message

**EMPTY MESSAGE**

The message to display if nothing matches the filter (generally considered the ok state).

**Path**: /settings/eventlog/real-time/filters/default

**Key**: empty message

**Default value**: eventlog found no records

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# EMPTY MESSAGE
empty message=eventlog found no records
```


<a name="/settings/eventlog/real-time/filters/default_escape html"/>
### escape html

**ESCAPE HTML**

Escape HTML characters (< and >).

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: escape html

**Default value**: 0

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# ESCAPE HTML
escape html=0
```


<a name="/settings/eventlog/real-time/filters/default_filter"/>
### filter

**FILTER**

Scan files for matching rows for each matching rows an OK message will be submitted

**Path**: /settings/eventlog/real-time/filters/default

**Key**: filter

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# FILTER
filter=
```


<a name="/settings/eventlog/real-time/filters/default_log"/>
### log

**FILE**

The eventlog record to filter on (if set to 'all' means all enabled logs)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: log

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# FILE
log=
```


<a name="/settings/eventlog/real-time/filters/default_logs"/>
### logs

**FILES**

The eventlog record to filter on (if set to 'all' means all enabled logs)

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: logs

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# FILES
logs=
```


<a name="/settings/eventlog/real-time/filters/default_maximum age"/>
### maximum age

**MAGIMUM AGE**

How long before reporting "ok".
If this is set to "false" no periodic ok messages will be reported only errors.

**Path**: /settings/eventlog/real-time/filters/default

**Key**: maximum age

**Default value**: 5m

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# MAGIMUM AGE
maximum age=5m
```


<a name="/settings/eventlog/real-time/filters/default_ok"/>
### ok

**OK FILTER**

If any rows match this filter severity will escalated down to OK

**Path**: /settings/eventlog/real-time/filters/default

**Key**: ok

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# OK FILTER
ok=
```


<a name="/settings/eventlog/real-time/filters/default_ok syntax"/>
### ok syntax

**SYNTAX**

Format string for dates

**Path**: /settings/eventlog/real-time/filters/default

**Key**: ok syntax

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# SYNTAX
ok syntax=
```


<a name="/settings/eventlog/real-time/filters/default_perf config"/>
### perf config

**PERF CONFIG**

Performance data configuration

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: perf config

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# PERF CONFIG
perf config=
```


<a name="/settings/eventlog/real-time/filters/default_severity"/>
### severity

**SEVERITY**

THe severity of this message (OK, WARNING, CRITICAL, UNKNOWN)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: severity

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# SEVERITY
severity=
```


<a name="/settings/eventlog/real-time/filters/default_source id"/>
### source id

**SOURCE ID**

The name of the source system, will automatically use the remote system if a remote system is called. Almost most sending systems will replace this with current systems hostname if not present. So use this only if you need specific source systems for specific schedules and not calling remote systems.

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: source id

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# SOURCE ID
source id=
```


<a name="/settings/eventlog/real-time/filters/default_target"/>
### target

**DESTINATION**

Same as destination

**Path**: /settings/eventlog/real-time/filters/default

**Key**: target

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# DESTINATION
target=
```


<a name="/settings/eventlog/real-time/filters/default_target id"/>
### target id

**TARGET ID**

The target to send the message to (will be resolved by the consumer)

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/default

**Key**: target id

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# TARGET ID
target id=
```


<a name="/settings/eventlog/real-time/filters/default_top syntax"/>
### top syntax

**SYNTAX**

Format string for dates

**Path**: /settings/eventlog/real-time/filters/default

**Key**: top syntax

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# SYNTAX
top syntax=
```


<a name="/settings/eventlog/real-time/filters/default_warning"/>
### warning

**WARNING FILTER**

If any rows match this filter severity will escalated to WARNING

**Path**: /settings/eventlog/real-time/filters/default

**Key**: warning

**Default value**: 

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/default]
# WARNING FILTER
warning=
```




## /settings/eventlog/real-time/filters/sample

`/settings/eventlog/real-time/filters/sample`

**REAL TIME FILTER DEFENITION**

Definition for real time filter: 


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [command](#/settings/eventlog/real-time/filters/sample_command) |  | COMMAND NAME|
| [critical](#/settings/eventlog/real-time/filters/sample_critical) |  | CRITICAL FILTER|
| [debug](#/settings/eventlog/real-time/filters/sample_debug) | 0 | DEBUG|
| [destination](#/settings/eventlog/real-time/filters/sample_destination) |  | DESTINATION|
| [detail syntax](#/settings/eventlog/real-time/filters/sample_detail syntax) |  | SYNTAX|
| [empty message](#/settings/eventlog/real-time/filters/sample_empty message) | eventlog found no records | EMPTY MESSAGE|
| [escape html](#/settings/eventlog/real-time/filters/sample_escape html) | 0 | ESCAPE HTML|
| [filter](#/settings/eventlog/real-time/filters/sample_filter) |  | FILTER|
| [log](#/settings/eventlog/real-time/filters/sample_log) |  | FILE|
| [logs](#/settings/eventlog/real-time/filters/sample_logs) |  | FILES|
| [maximum age](#/settings/eventlog/real-time/filters/sample_maximum age) | 5m | MAGIMUM AGE|
| [ok](#/settings/eventlog/real-time/filters/sample_ok) |  | OK FILTER|
| [ok syntax](#/settings/eventlog/real-time/filters/sample_ok syntax) |  | SYNTAX|
| [perf config](#/settings/eventlog/real-time/filters/sample_perf config) |  | PERF CONFIG|
| [severity](#/settings/eventlog/real-time/filters/sample_severity) |  | SEVERITY|
| [source id](#/settings/eventlog/real-time/filters/sample_source id) |  | SOURCE ID|
| [target](#/settings/eventlog/real-time/filters/sample_target) |  | DESTINATION|
| [target id](#/settings/eventlog/real-time/filters/sample_target id) |  | TARGET ID|
| [top syntax](#/settings/eventlog/real-time/filters/sample_top syntax) |  | SYNTAX|
| [warning](#/settings/eventlog/real-time/filters/sample_warning) |  | WARNING FILTER|


**Sample**::

```
# REAL TIME FILTER DEFENITION
# Definition for real time filter:
[/settings/eventlog/real-time/filters/sample]
command=
critical=
debug=0
destination=
detail syntax=
empty message=eventlog found no records
escape html=0
filter=
log=
logs=
maximum age=5m
ok=
ok syntax=
perf config=
severity=
source id=
target=
target id=
top syntax=
warning=

```


<a name="/settings/eventlog/real-time/filters/sample_command"/>
### command

**COMMAND NAME**

The name of the command (think nagios service name) to report up stream (defaults to alias if not set)

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: command

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# COMMAND NAME
command=
```


<a name="/settings/eventlog/real-time/filters/sample_critical"/>
### critical

**CRITICAL FILTER**

If any rows match this filter severity will escalated to CRITICAL

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: critical

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# CRITICAL FILTER
critical=
```


<a name="/settings/eventlog/real-time/filters/sample_debug"/>
### debug

**DEBUG**

Enable this to display debug information for this match filter

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: debug

**Default value**: 0

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# DEBUG
debug=0
```


<a name="/settings/eventlog/real-time/filters/sample_destination"/>
### destination

**DESTINATION**

The destination for intercepted messages

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: destination

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# DESTINATION
destination=
```


<a name="/settings/eventlog/real-time/filters/sample_detail syntax"/>
### detail syntax

**SYNTAX**

Format string for dates

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: detail syntax

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# SYNTAX
detail syntax=
```


<a name="/settings/eventlog/real-time/filters/sample_empty message"/>
### empty message

**EMPTY MESSAGE**

The message to display if nothing matches the filter (generally considered the ok state).

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: empty message

**Default value**: eventlog found no records

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# EMPTY MESSAGE
empty message=eventlog found no records
```


<a name="/settings/eventlog/real-time/filters/sample_escape html"/>
### escape html

**ESCAPE HTML**

Escape HTML characters (< and >).

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: escape html

**Default value**: 0

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# ESCAPE HTML
escape html=0
```


<a name="/settings/eventlog/real-time/filters/sample_filter"/>
### filter

**FILTER**

Scan files for matching rows for each matching rows an OK message will be submitted

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: filter

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# FILTER
filter=
```


<a name="/settings/eventlog/real-time/filters/sample_log"/>
### log

**FILE**

The eventlog record to filter on (if set to 'all' means all enabled logs)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: log

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# FILE
log=
```


<a name="/settings/eventlog/real-time/filters/sample_logs"/>
### logs

**FILES**

The eventlog record to filter on (if set to 'all' means all enabled logs)

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: logs

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# FILES
logs=
```


<a name="/settings/eventlog/real-time/filters/sample_maximum age"/>
### maximum age

**MAGIMUM AGE**

How long before reporting "ok".
If this is set to "false" no periodic ok messages will be reported only errors.

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: maximum age

**Default value**: 5m

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# MAGIMUM AGE
maximum age=5m
```


<a name="/settings/eventlog/real-time/filters/sample_ok"/>
### ok

**OK FILTER**

If any rows match this filter severity will escalated down to OK

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: ok

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# OK FILTER
ok=
```


<a name="/settings/eventlog/real-time/filters/sample_ok syntax"/>
### ok syntax

**SYNTAX**

Format string for dates

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: ok syntax

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# SYNTAX
ok syntax=
```


<a name="/settings/eventlog/real-time/filters/sample_perf config"/>
### perf config

**PERF CONFIG**

Performance data configuration

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: perf config

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# PERF CONFIG
perf config=
```


<a name="/settings/eventlog/real-time/filters/sample_severity"/>
### severity

**SEVERITY**

THe severity of this message (OK, WARNING, CRITICAL, UNKNOWN)

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: severity

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# SEVERITY
severity=
```


<a name="/settings/eventlog/real-time/filters/sample_source id"/>
### source id

**SOURCE ID**

The name of the source system, will automatically use the remote system if a remote system is called. Almost most sending systems will replace this with current systems hostname if not present. So use this only if you need specific source systems for specific schedules and not calling remote systems.

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: source id

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# SOURCE ID
source id=
```


<a name="/settings/eventlog/real-time/filters/sample_target"/>
### target

**DESTINATION**

Same as destination

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: target

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# DESTINATION
target=
```


<a name="/settings/eventlog/real-time/filters/sample_target id"/>
### target id

**TARGET ID**

The target to send the message to (will be resolved by the consumer)

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: target id

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# TARGET ID
target id=
```


<a name="/settings/eventlog/real-time/filters/sample_top syntax"/>
### top syntax

**SYNTAX**

Format string for dates

**Advanced** (means it is not commonly used)

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: top syntax

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# SYNTAX
top syntax=
```


<a name="/settings/eventlog/real-time/filters/sample_warning"/>
### warning

**WARNING FILTER**

If any rows match this filter severity will escalated to WARNING

**Path**: /settings/eventlog/real-time/filters/sample

**Key**: warning

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckEventLog`

**Sample**::

```
[/settings/eventlog/real-time/filters/sample]
# WARNING FILTER
warning=
```


