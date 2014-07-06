.. default-domain:: nscp

.. module:: CheckNSCP
    :synopsis: Use this module to check the healt and status of NSClient++ it self

=================================
:module:`CheckNSCP` --- CheckNSCP
=================================
Use this module to check the healt and status of NSClient++ it self

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_nscp` | Check the internal healt of NSClient++.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/crash` | :confkey:`~/settings/crash.archive` | ARCHIVE CRASHREPORTS
    :confpath:`/settings/crash` | :confkey:`~/settings/crash.archive folder` | CRASH ARCHIVE LOCATION
    :confpath:`/settings/crash` | :confkey:`~/settings/crash.restart` | RESTART
    :confpath:`/settings/crash` | :confkey:`~/settings/crash.restart target` | RESTART SERVICE NAME
    :confpath:`/settings/crash` | :confkey:`~/settings/crash.submit` | SUBMIT CRASHREPORTS
    :confpath:`/settings/crash` | :confkey:`~/settings/crash.submit url` | SUBMISSION URL




Queries
=======
A quick reference for all avalible queries (check commands) in the CheckNSCP module.

:query:`check_nscp`
-------------------
.. query:: check_nscp
    :synopsis: Check the internal healt of NSClient++.

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






… 
--
.. confpath:: /settings/crash
    :synopsis: CRASH SECTION

    **CRASH SECTION**

    | Configure crash handling properties.


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`archive` | 1 | ARCHIVE CRASHREPORTS
    :confkey:`archive folder` | ${shared-path}crash-dumps | CRASH ARCHIVE LOCATION
    :confkey:`restart` | 1 | RESTART
    :confkey:`restart target` | NSCP | RESTART SERVICE NAME
    :confkey:`submit` | 0 | SUBMIT CRASHREPORTS
    :confkey:`submit url` | http://crash.nsclient.org/submit | SUBMISSION URL


**Sample**::

    # CRASH SECTION
    # Configure crash handling properties.
    [/settings/crash]
    archive=1
    archive folder=${shared-path}crash-dumps
    restart=1
    restart target=NSCP
    submit=0
    submit url=http://crash.nsclient.org/submit


.. confkey:: archive
    :synopsis: ARCHIVE CRASHREPORTS

    **ARCHIVE CRASHREPORTS**

    | Archive crash reports in the archive folder

    **Path**: /settings/crash

    **Key**: archive

    **Default value**: 1

    **Used by**: :module:`CheckNSCP`,  :module:``

    **Sample**::

        [/settings/crash]
        # ARCHIVE CRASHREPORTS
        archive=1


.. confkey:: archive folder
    :synopsis: CRASH ARCHIVE LOCATION

    **CRASH ARCHIVE LOCATION**

    | The folder to archive crash dumps in

    **Path**: /settings/crash

    **Key**: archive folder

    **Default value**: ${shared-path}crash-dumps

    **Used by**: :module:`CheckNSCP`,  :module:``

    **Sample**::

        [/settings/crash]
        # CRASH ARCHIVE LOCATION
        archive folder=${shared-path}crash-dumps


.. confkey:: restart
    :synopsis: RESTART

    **RESTART**

    | Submit crash reports to nsclient.org (or your configured submission server)

    **Path**: /settings/crash

    **Key**: restart

    **Default value**: 1

    **Used by**: :module:`CheckNSCP`,  :module:``

    **Sample**::

        [/settings/crash]
        # RESTART
        restart=1


.. confkey:: restart target
    :synopsis: RESTART SERVICE NAME

    **RESTART SERVICE NAME**

    | The url to submit crash reports to

    **Path**: /settings/crash

    **Key**: restart target

    **Default value**: NSCP

    **Used by**: :module:`CheckNSCP`,  :module:``

    **Sample**::

        [/settings/crash]
        # RESTART SERVICE NAME
        restart target=NSCP


.. confkey:: submit
    :synopsis: SUBMIT CRASHREPORTS

    **SUBMIT CRASHREPORTS**

    | Submit crash reports to nsclient.org (or your configured submission server)

    **Path**: /settings/crash

    **Key**: submit

    **Default value**: 0

    **Used by**: :module:`CheckNSCP`,  :module:``

    **Sample**::

        [/settings/crash]
        # SUBMIT CRASHREPORTS
        submit=0


.. confkey:: submit url
    :synopsis: SUBMISSION URL

    **SUBMISSION URL**

    | The url to submit crash reports to

    **Path**: /settings/crash

    **Key**: submit url

    **Default value**: http://crash.nsclient.org/submit

    **Used by**: :module:`CheckNSCP`,  :module:``

    **Sample**::

        [/settings/crash]
        # SUBMISSION URL
        submit url=http://crash.nsclient.org/submit


