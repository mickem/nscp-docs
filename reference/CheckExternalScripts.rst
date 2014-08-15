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
    :confpath:`/settings/external scripts/alias` | :confkey:`~/settings/external scripts/alias.default` | default
    :confpath:`/settings/external scripts/wrappings` | :confkey:`~/settings/external scripts/wrappings.bat` | BATCH FILE WRAPPING
    :confpath:`/settings/external scripts/wrappings` | :confkey:`~/settings/external scripts/wrappings.ps1` | POWERSHELL WRAPPING
    :confpath:`/settings/external scripts/wrappings` | :confkey:`~/settings/external scripts/wrappings.vbs` | VISUAL BASIC WRAPPING








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

        | This option determines whether or not the we will allow clients to specify nasty (as in |`&><'"\[]{}) characters in arguments.

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
    | An alias is an internal command that has been "wrapped" (to add arguments). Be careful so you don't create loops (ie check_loop=check_a, check_a=check_loop)


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
        :confkey:`default` |  | default

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
        default=


    .. confkey:: alias_cpu
        :synopsis: alias_cpu

        **alias_cpu**

        | Alias for alias_cpu. To configure this item add a section called: /settings/external scripts/alias/alias_cpu

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

        | Alias for alias_cpu_ex. To configure this item add a section called: /settings/external scripts/alias/alias_cpu_ex

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

        | Alias for alias_disk. To configure this item add a section called: /settings/external scripts/alias/alias_disk

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

        | Alias for alias_disk_loose. To configure this item add a section called: /settings/external scripts/alias/alias_disk_loose

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

        | Alias for alias_event_log. To configure this item add a section called: /settings/external scripts/alias/alias_event_log

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

        | Alias for alias_file_age. To configure this item add a section called: /settings/external scripts/alias/alias_file_age

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

        | Alias for alias_file_size. To configure this item add a section called: /settings/external scripts/alias/alias_file_size

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

        | Alias for alias_mem. To configure this item add a section called: /settings/external scripts/alias/alias_mem

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

        | Alias for alias_process. To configure this item add a section called: /settings/external scripts/alias/alias_process

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

        | Alias for alias_process_count. To configure this item add a section called: /settings/external scripts/alias/alias_process_count

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

        | Alias for alias_process_hung. To configure this item add a section called: /settings/external scripts/alias/alias_process_hung

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

        | Alias for alias_process_stopped. To configure this item add a section called: /settings/external scripts/alias/alias_process_stopped

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

        | Alias for alias_sched_all. To configure this item add a section called: /settings/external scripts/alias/alias_sched_all

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

        | Alias for alias_sched_long. To configure this item add a section called: /settings/external scripts/alias/alias_sched_long

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

        | Alias for alias_sched_task. To configure this item add a section called: /settings/external scripts/alias/alias_sched_task

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

        | Alias for alias_service. To configure this item add a section called: /settings/external scripts/alias/alias_service

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

        | Alias for alias_service_ex. To configure this item add a section called: /settings/external scripts/alias/alias_service_ex

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

        | Alias for alias_up. To configure this item add a section called: /settings/external scripts/alias/alias_up

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

        | Alias for alias_volumes. To configure this item add a section called: /settings/external scripts/alias/alias_volumes

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

        | Alias for alias_volumes_loose. To configure this item add a section called: /settings/external scripts/alias/alias_volumes_loose

        **Path**: /settings/external scripts/alias

        **Key**: alias_volumes_loose

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # alias_volumes_loose
            alias_volumes_loose=


    .. confkey:: default
        :synopsis: default

        **default**

        | Alias for default. To configure this item add a section called: /settings/external scripts/alias/default

        **Path**: /settings/external scripts/alias

        **Key**: default

        **Default value**: 

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/alias]
            # default
            default=




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




…  / wrapped scripts
--------------------

.. confpath:: /settings/external scripts/wrapped scripts
    :synopsis: WRAPPED SCRIPTS SECTION

    **WRAPPED SCRIPTS SECTION**

    | A list of wrapped scripts (ie. using the template mechanism)




    **Sample**::

        # WRAPPED SCRIPTS SECTION
        # A list of wrapped scripts (ie. using the template mechanism)
        [/settings/external scripts/wrapped scripts]




…  / wrappings
--------------

.. confpath:: /settings/external scripts/wrappings
    :synopsis: EXTERNAL SCRIPT WRAPPINGS SECTION

    **EXTERNAL SCRIPT WRAPPINGS SECTION**

    | A list of templates for wrapped scripts


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`bat` | scripts\\%SCRIPT% %ARGS% | BATCH FILE WRAPPING
        :confkey:`ps1` | cmd /c echo scripts\\%SCRIPT% %ARGS%; exit($lastexitcode) | powershell.exe -command - | POWERSHELL WRAPPING
        :confkey:`vbs` | cscript.exe //T:30 //NoLogo scripts\\lib\\wrapper.vbs %SCRIPT% %ARGS% | VISUAL BASIC WRAPPING

    **Sample**::

        # EXTERNAL SCRIPT WRAPPINGS SECTION
        # A list of templates for wrapped scripts
        [/settings/external scripts/wrappings]
        bat=scripts\\%SCRIPT% %ARGS%
        ps1=cmd /c echo scripts\\%SCRIPT% %ARGS%; exit($lastexitcode) | powershell.exe -command -
        vbs=cscript.exe //T:30 //NoLogo scripts\\lib\\wrapper.vbs %SCRIPT% %ARGS%


    .. confkey:: bat
        :synopsis: BATCH FILE WRAPPING

        **BATCH FILE WRAPPING**



        **Path**: /settings/external scripts/wrappings

        **Key**: bat

        **Default value**: scripts\\%SCRIPT% %ARGS%

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/wrappings]
            # BATCH FILE WRAPPING
            bat=scripts\\%SCRIPT% %ARGS%


    .. confkey:: ps1
        :synopsis: POWERSHELL WRAPPING

        **POWERSHELL WRAPPING**



        **Path**: /settings/external scripts/wrappings

        **Key**: ps1

        **Default value**: cmd /c echo scripts\\%SCRIPT% %ARGS%; exit($lastexitcode) | powershell.exe -command -

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/wrappings]
            # POWERSHELL WRAPPING
            ps1=cmd /c echo scripts\\%SCRIPT% %ARGS%; exit($lastexitcode) | powershell.exe -command -


    .. confkey:: vbs
        :synopsis: VISUAL BASIC WRAPPING

        **VISUAL BASIC WRAPPING**



        **Path**: /settings/external scripts/wrappings

        **Key**: vbs

        **Default value**: cscript.exe //T:30 //NoLogo scripts\\lib\\wrapper.vbs %SCRIPT% %ARGS%

        **Used by**: :module:`CheckExternalScripts`

        **Sample**::

            [/settings/external scripts/wrappings]
            # VISUAL BASIC WRAPPING
            vbs=cscript.exe //T:30 //NoLogo scripts\\lib\\wrapper.vbs %SCRIPT% %ARGS%


