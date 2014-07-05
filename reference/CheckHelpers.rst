.. default-domain:: nscp

.. module:: CheckHelpers
    :synopsis: Various helper function to extend other checks.

=======================================
:module:`CheckHelpers` --- CheckHelpers
=======================================
Various helper function to extend other checks.

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_always_critical` | Run another check and regardless of its return code return CRITICAL.
    :query:`check_always_ok` | Run another check and regardless of its return code return OK.
    :query:`check_always_warning` | Run another check and regardless of its return code return WARNING.
    :query:`check_critical` | Just return CRITICAL (anything passed along will be used as a message).
    :query:`check_multi` | Run more then one check and return the worst state.
    :query:`check_negate` | Run a check and alter the return status codes according to arguments.
    :query:`check_ok` | Just return OK (anything passed along will be used as a message).
    :query:`check_timeout` | Run a check and timeout after a given amount of time if the check has not returned.
    :query:`check_version` | Just return the NSClient++ version.
    :query:`check_warning` | Just return WARNING (anything passed along will be used as a message).
    :query:`filter_perf` | Run a check and filter performance data.


**Aliases (Overview)**:

A list of all short hand aliases for queries (check commands)



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    checkalwayscritical | :query:`check_always_critical`
    checkalwaysok | :query:`check_always_ok`
    checkalwayswarning | :query:`check_always_warning`
    checkcritical | :query:`check_critical`
    checkmultiple | :query:`check_multi`
    checkok | :query:`check_ok`
    checkversion | :query:`check_version`
    checkwarning | :query:`check_warning`
    negate | :query:`check_negate`
    timeout | :query:`check_timeout`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)



Queries
=======
A quick reference for all avalible queries (check commands) in the CheckHelpers module.

:query:`check_always_critical`
------------------------------
.. query:: check_always_critical
    :synopsis: Run another check and regardless of its return code return CRITICAL.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).


:query:`check_always_ok`
------------------------
.. query:: check_always_ok
    :synopsis: Run another check and regardless of its return code return OK.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).


:query:`check_always_warning`
-----------------------------
.. query:: check_always_warning
    :synopsis: Run another check and regardless of its return code return WARNING.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).


:query:`check_critical`
-----------------------
.. query:: check_critical
    :synopsis: Just return CRITICAL (anything passed along will be used as a message).

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).


:query:`check_multi`
--------------------
.. query:: check_multi
    :synopsis: Run more then one check and return the worst state.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`command` | N/A | Commands to run (can be used multiple times)
    :option:`arguments` | N/A | Deprecated alias for command
    :option:`separator` | ,  | Separator between messages
    :option:`prefix` | N/A | Message prefix
    :option:`suffix` | N/A | Message suffix


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: command
    :synopsis: Commands to run (can be used multiple times)

    | Commands to run (can be used multiple times)

.. option:: arguments
    :synopsis: Deprecated alias for command

    | Deprecated alias for command

.. option:: separator
    :synopsis: Separator between messages

    | Separator between messages

.. option:: prefix
    :synopsis: Message prefix

    | Message prefix

.. option:: suffix
    :synopsis: Message suffix

    | Message suffix


:query:`check_negate`
---------------------
.. query:: check_negate
    :synopsis: Run a check and alter the return status codes according to arguments.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`ok` | N/A | The state to return instead of OK
    :option:`warning` | N/A | The state to return instead of WARNING
    :option:`critical` | N/A | The state to return instead of CRITICAL
    :option:`unknown` | N/A | The state to return instead of UNKNOWN
    :option:`command` | N/A | Wrapped command to execute
    :option:`arguments` | N/A | List of arguments (for wrapped command)


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: ok
    :synopsis: The state to return instead of OK

    | The state to return instead of OK

.. option:: warning
    :synopsis: The state to return instead of WARNING

    | The state to return instead of WARNING

.. option:: critical
    :synopsis: The state to return instead of CRITICAL

    | The state to return instead of CRITICAL

.. option:: unknown
    :synopsis: The state to return instead of UNKNOWN

    | The state to return instead of UNKNOWN

.. option:: command
    :synopsis: Wrapped command to execute

    | Wrapped command to execute

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)


:query:`check_ok`
-----------------
.. query:: check_ok
    :synopsis: Just return OK (anything passed along will be used as a message).

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).


:query:`check_timeout`
----------------------
.. query:: check_timeout
    :synopsis: Run a check and timeout after a given amount of time if the check has not returned.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`timeout` | N/A | The timeout value
    :option:`command` | N/A | Wrapped command to execute
    :option:`arguments` | N/A | List of arguments (for wrapped command)
    :option:`return` | N/A | The return status


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: timeout
    :synopsis: The timeout value

    | The timeout value

.. option:: command
    :synopsis: Wrapped command to execute

    | Wrapped command to execute

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)

.. option:: return
    :synopsis: The return status

    | The return status


:query:`check_version`
----------------------
.. query:: check_version
    :synopsis: Just return the NSClient++ version.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`0` | 3 | 9 2014-06-02


Arguments
*********
.. option:: 0
    :synopsis: 9 2014-06-02

    | 9 2014-06-02


:query:`check_warning`
----------------------
.. query:: check_warning
    :synopsis: Just return WARNING (anything passed along will be used as a message).

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).


:query:`filter_perf`
--------------------
.. query:: filter_perf
    :synopsis: Run a check and filter performance data.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`sort` | none | The sort order to use: none, normal or reversed
    :option:`limit` | 0 | The maximum number of items to return (0 returns all items)
    :option:`command` | N/A | Wrapped command to execute
    :option:`arguments` | N/A | List of arguments (for wrapped command)


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: sort
    :synopsis: The sort order to use: none, normal or reversed

    | The sort order to use: none, normal or reversed

.. option:: limit
    :synopsis: The maximum number of items to return (0 returns all items)

    | The maximum number of items to return (0 returns all items)

.. option:: command
    :synopsis: Wrapped command to execute

    | Wrapped command to execute

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)




