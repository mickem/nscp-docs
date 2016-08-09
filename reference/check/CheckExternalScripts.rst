.. default-domain:: nscp

.. module:: CheckExternalScripts
    :synopsis: Execute external scripts

=======================================================
:module:`CheckExternalScripts` --- CheckExternalScripts
=======================================================
Execute external scripts



**Aliases (Overview)**:

A list of all short hand aliases for queries (check commands)



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    alias_cpu | Alias for: :query:`check_cpu`
    alias_cpu_ex | Alias for: :query:`check_cpu`
    alias_disk | Alias for: :query:`check_drivesize`
    alias_disk_loose | Alias for: :query:`check_drivesize`
    alias_event_log | Alias for: :query:`check_eventlog`
    alias_file_age | Alias for: :query:`check_files`
    alias_file_size | Alias for: :query:`check_files`
    alias_mem | Alias for: :query:`check_memory`
    alias_process | Alias for: :query:`check_process`
    alias_process_count | Alias for: :query:`check_process`
    alias_process_hung | Alias for: :query:`check_process`
    alias_process_stopped | Alias for: :query:`check_process`
    alias_sched_all | Alias for: :query:`check_tasksched`
    alias_sched_long | Alias for: :query:`check_tasksched`
    alias_sched_task | Alias for: :query:`check_tasksched`
    alias_service | Alias for: :query:`check_service`
    alias_service_ex | Alias for: :query:`check_service`
    alias_up | Alias for: :query:`check_uptime`
    alias_volumes | Alias for: :query:`check_drivesize`
    alias_volumes_loose | Alias for: :query:`check_drivesize`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/external scripts` | :confkey:`~/settings/external scripts.allow arguments` | COMMAND ARGUMENT PROCESSING
    :confpath:`/settings/external scripts` | :confkey:`~/settings/external scripts.allow nasty characters` | COMMAND ALLOW NASTY META CHARS
    :confpath:`/settings/external scripts` | :confkey:`~/settings/external scripts.script path` | SCRIPT DIRECTORY
    :confpath:`/settings/external scripts` | :confkey:`~/settings/external scripts.timeout` | COMMAND TIMEOUT
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_cpu` | alias_cpu
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_cpu_ex` | alias_cpu_ex
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_disk` | alias_disk
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_disk_loose` | alias_disk_loose
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_event_log` | alias_event_log
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_file_age` | alias_file_age
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_file_size` | alias_file_size
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_mem` | alias_mem
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_process` | alias_process
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_process_count` | alias_process_count
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_process_hung` | alias_process_hung
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_process_stopped` | alias_process_stopped
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_sched_all` | alias_sched_all
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_sched_long` | alias_sched_long
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_sched_task` | alias_sched_task
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_service` | alias_service
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_service_ex` | alias_service_ex
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_up` | alias_up
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_volumes` | alias_volumes
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.alias_volumes_loose` | alias_volumes_loose
    :confpath:`/settings/external scripts/alias/default` | :confkey:`~/settings/external scripts/alias/default.command` | COMMAND
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.command` | COMMAND
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.ignore perfdata` | IGNORE PERF DATA
    :confpath:`/settings/external scripts/wrappings` | :confkey:`~/settings/external scripts/wrappings.bat` | BATCH FILE WRAPPING
    :confpath:`/settings/external scripts/wrappings` | :confkey:`~/settings/external scripts/wrappings.ps1` | POWERSHELL WRAPPING
    :confpath:`/settings/external scripts/wrappings` | :confkey:`~/settings/external scripts/wrappings.vbs` | VISUAL BASIC WRAPPING

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/external scripts/alias/default` | :confkey:`~/settings/external scripts/alias/default.alias` | ALIAS
    :confpath:`/settings/external scripts/alias/default` | :confkey:`~/settings/external scripts/alias/default.is template` | IS TEMPLATE
    :confpath:`/settings/external scripts/alias/default` | :confkey:`~/settings/external scripts/alias/default.parent` | PARENT
    :confpath:`/settings/external scripts/alias/sample` | :confkey:`~/settings/external scripts/alias/sample.alias` | ALIAS
    :confpath:`/settings/external scripts/alias/sample` | :confkey:`~/settings/external scripts/alias/sample.is template` | IS TEMPLATE
    :confpath:`/settings/external scripts/alias/sample` | :confkey:`~/settings/external scripts/alias/sample.parent` | PARENT
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.alias` | ALIAS
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.capture output` | CAPTURE OUTPUT
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.display` | DISPLAY
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.domain` | DOMAIN
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.encoding` | ENCODING
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.is template` | IS TEMPLATE
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.parent` | PARENT
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.password` | PASSWORD
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.session` | SESSION
    :confpath:`/settings/external scripts/scripts/default` | :confkey:`~/settings/external scripts/scripts/default.user` | USER
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.alias` | ALIAS
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.is template` | IS TEMPLATE
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.parent` | PARENT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/external scripts/alias/sample` | :confkey:`~/settings/external scripts/alias/sample.command` | COMMAND
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.capture output` | CAPTURE OUTPUT
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.command` | COMMAND
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.display` | DISPLAY
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.domain` | DOMAIN
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.encoding` | ENCODING
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.ignore perfdata` | IGNORE PERF DATA
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.password` | PASSWORD
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.session` | SESSION
    :confpath:`/settings/external scripts/scripts/sample` | :confkey:`~/settings/external scripts/scripts/sample.user` | USER



Samples
-------

.. include:: ../../samples/CheckExternalScripts_samples.rst






/ settings/ external scripts
----------------------------

.. confpath:: /settings/external scripts
    :synopsis: EXTERNAL SCRIPT SECTION

**EXTERNAL SCRIPT SECTION**

    | Section for external scripts configuration options (CheckExternalScripts).


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`allow arguments` | 0 | COMMAND ARGUMENT PROCESSING
        :confkey:`allow nasty characters` | 0 | COMMAND ALLOW NASTY META CHARS
        :confkey:`script path` |  | SCRIPT DIRECTORY
        :confkey:`timeout` | 60 | COMMAND TIMEOUT

    **Sample**::

        # EXTERNAL SCRIPT SECTION
        # Section for external scripts configuration options (CheckExternalScripts).
        [/settings/external scripts]
        allow arguments=0
        allow nasty characters=0
        script path=
        timeout=60


    .. confkey:: allow arguments
        :synopsis: COMMAND ARGUMENT PROCESSING

        **COMMAND ARGUMENT PROCESSING**

        | This option determines whether or not the we will allow clients to specify arguments to commands that are executed.

        **Path**: /settings/external scripts

        **Key**: allow arguments

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts]
            # COMMAND ARGUMENT PROCESSING
            allow arguments=0


    .. confkey:: allow nasty characters
        :synopsis: COMMAND ALLOW NASTY META CHARS

        **COMMAND ALLOW NASTY META CHARS**

        | This option determines whether or not the we will allow clients to specify nasty (as in \|\`&><'"\\[]{}) characters in arguments.

        **Path**: /settings/external scripts

        **Key**: allow nasty characters

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts]
            # COMMAND ALLOW NASTY META CHARS
            allow nasty characters=0


    .. confkey:: script path
        :synopsis: SCRIPT DIRECTORY

        **SCRIPT DIRECTORY**

        | Load all scripts in a directory and use them as commands. Probably dangerous but useful if you have loads of scripts :)

        **Path**: /settings/external scripts

        **Key**: script path

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts]
            # SCRIPT DIRECTORY
            script path=


    .. confkey:: timeout
        :synopsis: COMMAND TIMEOUT

        **COMMAND TIMEOUT**

        | The maximum time in seconds that a command can execute. (if more then this execution will be aborted). NOTICE this only affects external commands not internal ones.

        **Path**: /settings/external scripts

        **Key**: timeout

        **Default value**: 60

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts]
            # COMMAND TIMEOUT
            timeout=60




…  / alias
----------

.. confpath:: /settings/external scripts/alias
    :synopsis: ALIAS SECTION

**ALIAS SECTION**

    | A list of aliases available.
    | An alias is an internal command that has been predefined to provide a single command without arguments. Be careful so you don't create loops (ie check_loop=check_a, check_a=check_loop)


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias_cpu` |  | alias_cpu
        :confkey:`alias_cpu_ex` |  | alias_cpu_ex
        :confkey:`alias_disk` |  | alias_disk
        :confkey:`alias_disk_loose` |  | alias_disk_loose
        :confkey:`alias_event_log` |  | alias_event_log
        :confkey:`alias_file_age` |  | alias_file_age
        :confkey:`alias_file_size` |  | alias_file_size
        :confkey:`alias_mem` |  | alias_mem
        :confkey:`alias_process` |  | alias_process
        :confkey:`alias_process_count` |  | alias_process_count
        :confkey:`alias_process_hung` |  | alias_process_hung
        :confkey:`alias_process_stopped` |  | alias_process_stopped
        :confkey:`alias_sched_all` |  | alias_sched_all
        :confkey:`alias_sched_long` |  | alias_sched_long
        :confkey:`alias_sched_task` |  | alias_sched_task
        :confkey:`alias_service` |  | alias_service
        :confkey:`alias_service_ex` |  | alias_service_ex
        :confkey:`alias_up` |  | alias_up
        :confkey:`alias_volumes` |  | alias_volumes
        :confkey:`alias_volumes_loose` |  | alias_volumes_loose

    **Sample**::

        # ALIAS SECTION
        # A list of aliases available.
        [/settings/external scripts/alias]
        alias_cpu=
        alias_cpu_ex=
        alias_disk=
        alias_disk_loose=
        alias_event_log=
        alias_file_age=
        alias_file_size=
        alias_mem=
        alias_process=
        alias_process_count=
        alias_process_hung=
        alias_process_stopped=
        alias_sched_all=
        alias_sched_long=
        alias_sched_task=
        alias_service=
        alias_service_ex=
        alias_up=
        alias_volumes=
        alias_volumes_loose=


    .. confkey:: alias_cpu
        :synopsis: alias_cpu

        **alias_cpu**

        | To configure this create a section under: /settings/external scripts/alias/alias_cpu

        **Path**: /settings/external scripts/alias

        **Key**: alias_cpu

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_cpu
            alias_cpu=


    .. confkey:: alias_cpu_ex
        :synopsis: alias_cpu_ex

        **alias_cpu_ex**

        | To configure this create a section under: /settings/external scripts/alias/alias_cpu_ex

        **Path**: /settings/external scripts/alias

        **Key**: alias_cpu_ex

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_cpu_ex
            alias_cpu_ex=


    .. confkey:: alias_disk
        :synopsis: alias_disk

        **alias_disk**

        | To configure this create a section under: /settings/external scripts/alias/alias_disk

        **Path**: /settings/external scripts/alias

        **Key**: alias_disk

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_disk
            alias_disk=


    .. confkey:: alias_disk_loose
        :synopsis: alias_disk_loose

        **alias_disk_loose**

        | To configure this create a section under: /settings/external scripts/alias/alias_disk_loose

        **Path**: /settings/external scripts/alias

        **Key**: alias_disk_loose

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_disk_loose
            alias_disk_loose=


    .. confkey:: alias_event_log
        :synopsis: alias_event_log

        **alias_event_log**

        | To configure this create a section under: /settings/external scripts/alias/alias_event_log

        **Path**: /settings/external scripts/alias

        **Key**: alias_event_log

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_event_log
            alias_event_log=


    .. confkey:: alias_file_age
        :synopsis: alias_file_age

        **alias_file_age**

        | To configure this create a section under: /settings/external scripts/alias/alias_file_age

        **Path**: /settings/external scripts/alias

        **Key**: alias_file_age

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_file_age
            alias_file_age=


    .. confkey:: alias_file_size
        :synopsis: alias_file_size

        **alias_file_size**

        | To configure this create a section under: /settings/external scripts/alias/alias_file_size

        **Path**: /settings/external scripts/alias

        **Key**: alias_file_size

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_file_size
            alias_file_size=


    .. confkey:: alias_mem
        :synopsis: alias_mem

        **alias_mem**

        | To configure this create a section under: /settings/external scripts/alias/alias_mem

        **Path**: /settings/external scripts/alias

        **Key**: alias_mem

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_mem
            alias_mem=


    .. confkey:: alias_process
        :synopsis: alias_process

        **alias_process**

        | To configure this create a section under: /settings/external scripts/alias/alias_process

        **Path**: /settings/external scripts/alias

        **Key**: alias_process

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_process
            alias_process=


    .. confkey:: alias_process_count
        :synopsis: alias_process_count

        **alias_process_count**

        | To configure this create a section under: /settings/external scripts/alias/alias_process_count

        **Path**: /settings/external scripts/alias

        **Key**: alias_process_count

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_process_count
            alias_process_count=


    .. confkey:: alias_process_hung
        :synopsis: alias_process_hung

        **alias_process_hung**

        | To configure this create a section under: /settings/external scripts/alias/alias_process_hung

        **Path**: /settings/external scripts/alias

        **Key**: alias_process_hung

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_process_hung
            alias_process_hung=


    .. confkey:: alias_process_stopped
        :synopsis: alias_process_stopped

        **alias_process_stopped**

        | To configure this create a section under: /settings/external scripts/alias/alias_process_stopped

        **Path**: /settings/external scripts/alias

        **Key**: alias_process_stopped

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_process_stopped
            alias_process_stopped=


    .. confkey:: alias_sched_all
        :synopsis: alias_sched_all

        **alias_sched_all**

        | To configure this create a section under: /settings/external scripts/alias/alias_sched_all

        **Path**: /settings/external scripts/alias

        **Key**: alias_sched_all

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_sched_all
            alias_sched_all=


    .. confkey:: alias_sched_long
        :synopsis: alias_sched_long

        **alias_sched_long**

        | To configure this create a section under: /settings/external scripts/alias/alias_sched_long

        **Path**: /settings/external scripts/alias

        **Key**: alias_sched_long

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_sched_long
            alias_sched_long=


    .. confkey:: alias_sched_task
        :synopsis: alias_sched_task

        **alias_sched_task**

        | To configure this create a section under: /settings/external scripts/alias/alias_sched_task

        **Path**: /settings/external scripts/alias

        **Key**: alias_sched_task

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_sched_task
            alias_sched_task=


    .. confkey:: alias_service
        :synopsis: alias_service

        **alias_service**

        | To configure this create a section under: /settings/external scripts/alias/alias_service

        **Path**: /settings/external scripts/alias

        **Key**: alias_service

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_service
            alias_service=


    .. confkey:: alias_service_ex
        :synopsis: alias_service_ex

        **alias_service_ex**

        | To configure this create a section under: /settings/external scripts/alias/alias_service_ex

        **Path**: /settings/external scripts/alias

        **Key**: alias_service_ex

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_service_ex
            alias_service_ex=


    .. confkey:: alias_up
        :synopsis: alias_up

        **alias_up**

        | To configure this create a section under: /settings/external scripts/alias/alias_up

        **Path**: /settings/external scripts/alias

        **Key**: alias_up

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_up
            alias_up=


    .. confkey:: alias_volumes
        :synopsis: alias_volumes

        **alias_volumes**

        | To configure this create a section under: /settings/external scripts/alias/alias_volumes

        **Path**: /settings/external scripts/alias

        **Key**: alias_volumes

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_volumes
            alias_volumes=


    .. confkey:: alias_volumes_loose
        :synopsis: alias_volumes_loose

        **alias_volumes_loose**

        | To configure this create a section under: /settings/external scripts/alias/alias_volumes_loose

        **Path**: /settings/external scripts/alias

        **Key**: alias_volumes_loose

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_volumes_loose
            alias_volumes_loose=




…  / alias / default
--------------------

.. confpath:: /settings/external scripts/alias/default
    :synopsis: ALIAS DEFENITION

**ALIAS DEFENITION**

    | Alias definition for: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias` |  | ALIAS
        :confkey:`command` |  | COMMAND
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT

    **Sample**::

        # ALIAS DEFENITION
        # Alias definition for: default
        [/settings/external scripts/alias/default]
        alias=
        command=
        is template=0
        parent=default


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/alias/default

        **Key**: alias

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias/default]
            # ALIAS
            alias=


    .. confkey:: command
        :synopsis: COMMAND

        **COMMAND**

        | Command to execute

        **Path**: /settings/external scripts/alias/default

        **Key**: command

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias/default]
            # COMMAND
            command=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/alias/default

        **Key**: is template

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias/default]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/alias/default

        **Key**: parent

        **Default value**: default

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias/default]
            # PARENT
            parent=default




…  / alias / sample
-------------------

.. confpath:: /settings/external scripts/alias/sample
    :synopsis: ALIAS DEFENITION

**ALIAS DEFENITION**

    | Alias definition for: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias` |  | ALIAS
        :confkey:`command` |  | COMMAND
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT

    **Sample**::

        # ALIAS DEFENITION
        # Alias definition for: sample
        [/settings/external scripts/alias/sample]
        alias=
        command=
        is template=0
        parent=default


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/alias/sample

        **Key**: alias

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias/sample]
            # ALIAS
            alias=


    .. confkey:: command
        :synopsis: COMMAND

        **COMMAND**

        | Command to execute

        **Path**: /settings/external scripts/alias/sample

        **Key**: command

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias/sample]
            # COMMAND
            command=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/alias/sample

        **Key**: is template

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias/sample]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/alias/sample

        **Key**: parent

        **Default value**: default

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias/sample]
            # PARENT
            parent=default




…  / scripts
------------

.. confpath:: /settings/external scripts/scripts
    :synopsis: SCRIPT SECTION

**SCRIPT SECTION**

    | A list of scripts available to run from the CheckExternalScripts module. Syntax is: <command>=<script> <arguments>




    **Sample**::

        # SCRIPT SECTION
        # A list of scripts available to run from the CheckExternalScripts module. Syntax is: <command>=<script> <arguments>
        [/settings/external scripts/scripts]




…  / scripts / default
----------------------

.. confpath:: /settings/external scripts/scripts/default
    :synopsis: COMMAND DEFENITION

**COMMAND DEFENITION**

    | Command definition for: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias` |  | ALIAS
        :confkey:`capture output` | 0 | CAPTURE OUTPUT
        :confkey:`command` |  | COMMAND
        :confkey:`display` | 0 | DISPLAY
        :confkey:`domain` |  | DOMAIN
        :confkey:`encoding` |  | ENCODING
        :confkey:`ignore perfdata` | 0 | IGNORE PERF DATA
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT
        :confkey:`password` |  | PASSWORD
        :confkey:`session` |  | SESSION
        :confkey:`user` |  | USER

    **Sample**::

        # COMMAND DEFENITION
        # Command definition for: default
        [/settings/external scripts/scripts/default]
        alias=
        capture output=0
        command=
        display=0
        domain=
        encoding=
        ignore perfdata=0
        is template=0
        parent=default
        password=
        session=
        user=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: alias

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # ALIAS
            alias=


    .. confkey:: capture output
        :synopsis: CAPTURE OUTPUT

        **CAPTURE OUTPUT**

        | This should be set to false if you want to run commands which never terminates (i.e. relinquish control from NSClient++). The effect of this is that the command output will not be captured. The main use is to protect from socket reuse issues

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: capture output

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # CAPTURE OUTPUT
            capture output=0


    .. confkey:: command
        :synopsis: COMMAND

        **COMMAND**

        | Command to execute

        **Path**: /settings/external scripts/scripts/default

        **Key**: command

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # COMMAND
            command=


    .. confkey:: display
        :synopsis: DISPLAY

        **DISPLAY**

        | Set to true if you want to display the resulting window or not

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: display

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # DISPLAY
            display=0


    .. confkey:: domain
        :synopsis: DOMAIN

        **DOMAIN**

        | The user to run the command as

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: domain

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # DOMAIN
            domain=


    .. confkey:: encoding
        :synopsis: ENCODING

        **ENCODING**

        | The encoding to parse the command as

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: encoding

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # ENCODING
            encoding=


    .. confkey:: ignore perfdata
        :synopsis: IGNORE PERF DATA

        **IGNORE PERF DATA**

        | Do not parse performance data from the output

        **Path**: /settings/external scripts/scripts/default

        **Key**: ignore perfdata

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # IGNORE PERF DATA
            ignore perfdata=0


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: is template

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: parent

        **Default value**: default

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # PARENT
            parent=default


    .. confkey:: password
        :synopsis: PASSWORD

        **PASSWORD**

        | The user to run the command as

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: password

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # PASSWORD
            password=


    .. confkey:: session
        :synopsis: SESSION

        **SESSION**

        | Session you want to invoke the client in either the number of current for the one with a UI

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: session

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # SESSION
            session=


    .. confkey:: user
        :synopsis: USER

        **USER**

        | The user to run the command as

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/default

        **Key**: user

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/default]
            # USER
            user=




…  / scripts / sample
---------------------

.. confpath:: /settings/external scripts/scripts/sample
    :synopsis: COMMAND DEFENITION

**COMMAND DEFENITION**

    | Command definition for: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias` |  | ALIAS
        :confkey:`capture output` | 0 | CAPTURE OUTPUT
        :confkey:`command` |  | COMMAND
        :confkey:`display` | 0 | DISPLAY
        :confkey:`domain` |  | DOMAIN
        :confkey:`encoding` |  | ENCODING
        :confkey:`ignore perfdata` | 0 | IGNORE PERF DATA
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT
        :confkey:`password` |  | PASSWORD
        :confkey:`session` |  | SESSION
        :confkey:`user` |  | USER

    **Sample**::

        # COMMAND DEFENITION
        # Command definition for: sample
        [/settings/external scripts/scripts/sample]
        alias=
        capture output=0
        command=
        display=0
        domain=
        encoding=
        ignore perfdata=0
        is template=0
        parent=default
        password=
        session=
        user=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: alias

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # ALIAS
            alias=


    .. confkey:: capture output
        :synopsis: CAPTURE OUTPUT

        **CAPTURE OUTPUT**

        | This should be set to false if you want to run commands which never terminates (i.e. relinquish control from NSClient++). The effect of this is that the command output will not be captured. The main use is to protect from socket reuse issues

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: capture output

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # CAPTURE OUTPUT
            capture output=0


    .. confkey:: command
        :synopsis: COMMAND

        **COMMAND**

        | Command to execute

        **Path**: /settings/external scripts/scripts/sample

        **Key**: command

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # COMMAND
            command=


    .. confkey:: display
        :synopsis: DISPLAY

        **DISPLAY**

        | Set to true if you want to display the resulting window or not

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: display

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # DISPLAY
            display=0


    .. confkey:: domain
        :synopsis: DOMAIN

        **DOMAIN**

        | The user to run the command as

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: domain

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # DOMAIN
            domain=


    .. confkey:: encoding
        :synopsis: ENCODING

        **ENCODING**

        | The encoding to parse the command as

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: encoding

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # ENCODING
            encoding=


    .. confkey:: ignore perfdata
        :synopsis: IGNORE PERF DATA

        **IGNORE PERF DATA**

        | Do not parse performance data from the output

        **Path**: /settings/external scripts/scripts/sample

        **Key**: ignore perfdata

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # IGNORE PERF DATA
            ignore perfdata=0


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: is template

        **Default value**: 0

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: parent

        **Default value**: default

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # PARENT
            parent=default


    .. confkey:: password
        :synopsis: PASSWORD

        **PASSWORD**

        | The user to run the command as

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: password

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # PASSWORD
            password=


    .. confkey:: session
        :synopsis: SESSION

        **SESSION**

        | Session you want to invoke the client in either the number of current for the one with a UI

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: session

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # SESSION
            session=


    .. confkey:: user
        :synopsis: USER

        **USER**

        | The user to run the command as

        **Advanced** (means it is not commonly used)

        **Path**: /settings/external scripts/scripts/sample

        **Key**: user

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/scripts/sample]
            # USER
            user=




…  / wrapped scripts
--------------------

.. confpath:: /settings/external scripts/wrapped scripts
    :synopsis: WRAPPED SCRIPTS SECTION

**WRAPPED SCRIPTS SECTION**

    | A list of wrapped scripts (ie. scruts using a template mechanism). The template used will be defined by the extension of the script.




    **Sample**::

        # WRAPPED SCRIPTS SECTION
        # A list of wrapped scripts (ie. scruts using a template mechanism). The template used will be defined by the extension of the script.
        [/settings/external scripts/wrapped scripts]




…  / wrappings
--------------

.. confpath:: /settings/external scripts/wrappings
    :synopsis: in flight

**in flight**

    | TODO


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`bat` |  | BATCH FILE WRAPPING
        :confkey:`ps1` |  | POWERSHELL WRAPPING
        :confkey:`vbs` |  | VISUAL BASIC WRAPPING

    **Sample**::

        # in flight
        # TODO
        [/settings/external scripts/wrappings]
        bat=
        ps1=
        vbs=


    .. confkey:: bat
        :synopsis: BATCH FILE WRAPPING

        **BATCH FILE WRAPPING**



        **Path**: /settings/external scripts/wrappings

        **Key**: bat

        **Default value**: 

        **Used by**: :module:``,  :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/wrappings]
            # BATCH FILE WRAPPING
            bat=


    .. confkey:: ps1
        :synopsis: POWERSHELL WRAPPING

        **POWERSHELL WRAPPING**



        **Path**: /settings/external scripts/wrappings

        **Key**: ps1

        **Default value**: 

        **Used by**: :module:``,  :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/wrappings]
            # POWERSHELL WRAPPING
            ps1=


    .. confkey:: vbs
        :synopsis: VISUAL BASIC WRAPPING

        **VISUAL BASIC WRAPPING**



        **Path**: /settings/external scripts/wrappings

        **Key**: vbs

        **Default value**: 

        **Used by**: :module:``,  :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/wrappings]
            # VISUAL BASIC WRAPPING
            vbs=


