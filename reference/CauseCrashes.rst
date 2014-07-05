.. default-domain:: nscp

.. module:: CauseCrashes
    :synopsis: *DO NOT USE* This module is usefull except for debugging purpouses and outright dangerous as it allows someone remotley to crash your client!

=======================================
:module:`CauseCrashes` --- CauseCrashes
=======================================
*DO NOT USE* This module is usefull except for debugging purpouses and outright dangerous as it allows someone remotley to crash your client!

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`crash_client` | Raise a fatal exception (zero pointer reference) and cause NSClient++ crash.


**Aliases (Overview)**:

A list of all short hand aliases for queries (check commands)



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    crashclient | :query:`crash_client`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)



Queries
=======
A quick reference for all avalible queries (check commands) in the CauseCrashes module.

:query:`crash_client`
---------------------
.. query:: crash_client
    :synopsis: Raise a fatal exception (zero pointer reference) and cause NSClient++ crash.

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




