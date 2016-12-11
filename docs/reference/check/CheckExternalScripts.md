# CheckExternalScripts

Execute external scripts



## Alias list

A list of all short hand aliases for queries (check commands)



| Command | Description|
| ------- | -----------|
| alias_cpu | Alias for: :query:`check_cpu`|
| alias_cpu_ex | Alias for: :query:`check_cpu`|
| alias_disk | Alias for: :query:`check_drivesize`|
| alias_disk_loose | Alias for: :query:`check_drivesize`|
| alias_event_log | Alias for: :query:`check_eventlog`|
| alias_file_age | Alias for: :query:`check_files`|
| alias_file_size | Alias for: :query:`check_files`|
| alias_mem | Alias for: :query:`check_memory`|
| alias_process | Alias for: :query:`check_process`|
| alias_process_count | Alias for: :query:`check_process`|
| alias_process_hung | Alias for: :query:`check_process`|
| alias_process_stopped | Alias for: :query:`check_process`|
| alias_sched_all | Alias for: :query:`check_tasksched`|
| alias_sched_long | Alias for: :query:`check_tasksched`|
| alias_sched_task | Alias for: :query:`check_tasksched`|
| alias_service | Alias for: :query:`check_service`|
| alias_service_ex | Alias for: :query:`check_service`|
| alias_up | Alias for: :query:`check_uptime`|
| alias_volumes | Alias for: :query:`check_drivesize`|
| alias_volumes_loose | Alias for: :query:`check_drivesize`|


## Command list

**TODO:** Add a list of all external commands (this is not check commands)

## Configuration list


Common Keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/external scripts](#/settings/external scripts) | [allow arguments](#/settings/external scripts_allow arguments) | COMMAND ARGUMENT PROCESSING|
| [/settings/external scripts](#/settings/external scripts) | [allow nasty characters](#/settings/external scripts_allow nasty characters) | COMMAND ALLOW NASTY META CHARS|
| [/settings/external scripts](#/settings/external scripts) | [script path](#/settings/external scripts_script path) | SCRIPT DIRECTORY|
| [/settings/external scripts](#/settings/external scripts) | [timeout](#/settings/external scripts_timeout) | COMMAND TIMEOUT|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_cpu](#/settings/external scripts/alias_alias_cpu) | alias_cpu|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_cpu_ex](#/settings/external scripts/alias_alias_cpu_ex) | alias_cpu_ex|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_disk](#/settings/external scripts/alias_alias_disk) | alias_disk|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_disk_loose](#/settings/external scripts/alias_alias_disk_loose) | alias_disk_loose|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_event_log](#/settings/external scripts/alias_alias_event_log) | alias_event_log|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_file_age](#/settings/external scripts/alias_alias_file_age) | alias_file_age|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_file_size](#/settings/external scripts/alias_alias_file_size) | alias_file_size|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_mem](#/settings/external scripts/alias_alias_mem) | alias_mem|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_process](#/settings/external scripts/alias_alias_process) | alias_process|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_process_count](#/settings/external scripts/alias_alias_process_count) | alias_process_count|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_process_hung](#/settings/external scripts/alias_alias_process_hung) | alias_process_hung|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_process_stopped](#/settings/external scripts/alias_alias_process_stopped) | alias_process_stopped|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_sched_all](#/settings/external scripts/alias_alias_sched_all) | alias_sched_all|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_sched_long](#/settings/external scripts/alias_alias_sched_long) | alias_sched_long|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_sched_task](#/settings/external scripts/alias_alias_sched_task) | alias_sched_task|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_service](#/settings/external scripts/alias_alias_service) | alias_service|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_service_ex](#/settings/external scripts/alias_alias_service_ex) | alias_service_ex|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_up](#/settings/external scripts/alias_alias_up) | alias_up|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_volumes](#/settings/external scripts/alias_alias_volumes) | alias_volumes|
| [/settings/external scripts/alias](#/settings/external scripts/alias) | [alias_volumes_loose](#/settings/external scripts/alias_alias_volumes_loose) | alias_volumes_loose|
| [/settings/external scripts/alias/default](#/settings/external scripts/alias/default) | [command](#/settings/external scripts/alias/default_command) | COMMAND|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [command](#/settings/external scripts/scripts/default_command) | COMMAND|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [ignore perfdata](#/settings/external scripts/scripts/default_ignore perfdata) | IGNORE PERF DATA|
| [/settings/external scripts/wrappings](#/settings/external scripts/wrappings) | [bat](#/settings/external scripts/wrappings_bat) | BATCH FILE WRAPPING|
| [/settings/external scripts/wrappings](#/settings/external scripts/wrappings) | [ps1](#/settings/external scripts/wrappings_ps1) | POWERSHELL WRAPPING|
| [/settings/external scripts/wrappings](#/settings/external scripts/wrappings) | [vbs](#/settings/external scripts/wrappings_vbs) | VISUAL BASIC WRAPPING|

Advanced keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/external scripts/alias/default](#/settings/external scripts/alias/default) | [alias](#/settings/external scripts/alias/default_alias) | ALIAS|
| [/settings/external scripts/alias/default](#/settings/external scripts/alias/default) | [is template](#/settings/external scripts/alias/default_is template) | IS TEMPLATE|
| [/settings/external scripts/alias/default](#/settings/external scripts/alias/default) | [parent](#/settings/external scripts/alias/default_parent) | PARENT|
| [/settings/external scripts/alias/sample](#/settings/external scripts/alias/sample) | [alias](#/settings/external scripts/alias/sample_alias) | ALIAS|
| [/settings/external scripts/alias/sample](#/settings/external scripts/alias/sample) | [is template](#/settings/external scripts/alias/sample_is template) | IS TEMPLATE|
| [/settings/external scripts/alias/sample](#/settings/external scripts/alias/sample) | [parent](#/settings/external scripts/alias/sample_parent) | PARENT|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [alias](#/settings/external scripts/scripts/default_alias) | ALIAS|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [capture output](#/settings/external scripts/scripts/default_capture output) | CAPTURE OUTPUT|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [display](#/settings/external scripts/scripts/default_display) | DISPLAY|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [domain](#/settings/external scripts/scripts/default_domain) | DOMAIN|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [encoding](#/settings/external scripts/scripts/default_encoding) | ENCODING|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [is template](#/settings/external scripts/scripts/default_is template) | IS TEMPLATE|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [parent](#/settings/external scripts/scripts/default_parent) | PARENT|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [password](#/settings/external scripts/scripts/default_password) | PASSWORD|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [session](#/settings/external scripts/scripts/default_session) | SESSION|
| [/settings/external scripts/scripts/default](#/settings/external scripts/scripts/default) | [user](#/settings/external scripts/scripts/default_user) | USER|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [alias](#/settings/external scripts/scripts/sample_alias) | ALIAS|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [is template](#/settings/external scripts/scripts/sample_is template) | IS TEMPLATE|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [parent](#/settings/external scripts/scripts/sample_parent) | PARENT|

Sample keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/external scripts/alias/sample](#/settings/external scripts/alias/sample) | [command](#/settings/external scripts/alias/sample_command) | COMMAND|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [capture output](#/settings/external scripts/scripts/sample_capture output) | CAPTURE OUTPUT|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [command](#/settings/external scripts/scripts/sample_command) | COMMAND|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [display](#/settings/external scripts/scripts/sample_display) | DISPLAY|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [domain](#/settings/external scripts/scripts/sample_domain) | DOMAIN|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [encoding](#/settings/external scripts/scripts/sample_encoding) | ENCODING|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [ignore perfdata](#/settings/external scripts/scripts/sample_ignore perfdata) | IGNORE PERF DATA|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [password](#/settings/external scripts/scripts/sample_password) | PASSWORD|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [session](#/settings/external scripts/scripts/sample_session) | SESSION|
| [/settings/external scripts/scripts/sample](#/settings/external scripts/scripts/sample) | [user](#/settings/external scripts/scripts/sample_user) | USER|



## Samples

# Adding a simple script #

<dl>
  <dt>Adding a script we ca use the short hand format :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts]</p>
    <p>my_ok1 = scripts\check_ok.bat</p>
    <p>my_ok2 = scripts\check_ok.bat</p>
  </dd>
</dl>
<dl>
  <dt>Or the long format :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts/my_ok1]</p>
    <p>command = scripts\check_ok.bat</p>
    <p>[/settings/external scripts/scripts/my_ok2]</p>
    <p>command = scripts\check_ok.bat</p>
  </dd>
</dl>
There is no difference between the two formats. Both will add two new commands called my_ok1 and my_ok2 which in turn will execute the scripts\check_ok.bat script. Thus for most cases the short hand is preferd (and most commonly used). The reason for the long format is when you need to customize your command. There are a number of options which can be set to customze the command: for instance which user should run the command. These cannot be set using the short format.

# Using arguments #

There are two ways to use arguments.

# Hardcoded into the command
# Allowing argument-pass through

The first option (hard-coding them) is obviously the more secure option as a third party cannot provide his or her own arguments.
But it adds to the maintenance burden as whenever you want to change an option you need to update the NSClient++ configuration (something which can be costly if you have many servers).

<dl>
  <dt>To allow argument pass-through you need to set :  : </dt>
  <dd>
    <p>[/settings/external scripts]</p>
    <p>allow arguments = true</p>
  </dd>
</dl>
Please note when it comes to arguments they can (and often need to) be configured in two place.
Once for the NRPE Server and once for CheckExternalScripts.

# Running a command as a user #

<dl>
  <dt>Running a command as a given user (to use elevated privileges for instance) you need to use the long format :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts/check_as_user]</p>
    <p>command = scripts\check_ok.bat</p>
    <p>user = Administrator</p>
    <p>password = 1qflkasdhf7ejd8/kjhskjhk(/)"#</p>
  </dd>
</dl>
<dl>
  <dt>You can also specify a session and to show the output if you want to have the program visible :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts/annoy_users]</p>
    <p>command = notepad.exe</p>
    <p>session = 1</p>
    <p>display = true</p>
  </dd>
</dl>
# Programs "running forever" #

Another use case of external scripts is to have event handlers which starts programs.
This is trickier then it sounds because all commands have a timeout and once that is reach they are killed.
NSClient++ exits it also terminates all running script thus your "fix" will not be very long.
<dl>
  <dt>To work around this you need to start the program without the control of NSClient++ (fork). To do this you need to set capture output to false like so :  : </dt>
  <dd>
    <p>[/settings/external scripts/scripts/fix_problem]</p>
    <p>command = notepad.exe</p>
    <p>capture output = false</p>
  </dd>
</dl>
The draw back to this is that the script cannot return any output neither message nor status code.

1. word of warning using "start" or other similar measure to try to start a program in a regular script will cause unexpected issue with NSClient++ due to how handles are inherited in Windows.
   This will end up blocking the port and forcing a restart of the server. Thus capture output = false method is preferred.




# Configuration



## /settings/external scripts

`/settings/external scripts`

**EXTERNAL SCRIPT SECTION**

Section for external scripts configuration options (CheckExternalScripts).


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [allow arguments](#/settings/external scripts_allow arguments) | 0 | COMMAND ARGUMENT PROCESSING|
| [allow nasty characters](#/settings/external scripts_allow nasty characters) | 0 | COMMAND ALLOW NASTY META CHARS|
| [script path](#/settings/external scripts_script path) |  | SCRIPT DIRECTORY|
| [timeout](#/settings/external scripts_timeout) | 60 | COMMAND TIMEOUT|


**Sample**::

```
# EXTERNAL SCRIPT SECTION
# Section for external scripts configuration options (CheckExternalScripts).
[/settings/external scripts]
allow arguments=0
allow nasty characters=0
script path=
timeout=60

```


<a name="/settings/external scripts_allow arguments"/>
### allow arguments

**COMMAND ARGUMENT PROCESSING**

This option determines whether or not the we will allow clients to specify arguments to commands that are executed.

**Path**: /settings/external scripts

**Key**: allow arguments

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts]
# COMMAND ARGUMENT PROCESSING
allow arguments=0
```


<a name="/settings/external scripts_allow nasty characters"/>
### allow nasty characters

**COMMAND ALLOW NASTY META CHARS**

This option determines whether or not the we will allow clients to specify nasty (as in \|\`&><'"\\[]{}) characters in arguments.

**Path**: /settings/external scripts

**Key**: allow nasty characters

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts]
# COMMAND ALLOW NASTY META CHARS
allow nasty characters=0
```


<a name="/settings/external scripts_script path"/>
### script path

**SCRIPT DIRECTORY**

Load all scripts in a directory and use them as commands. Probably dangerous but useful if you have loads of scripts :)

**Path**: /settings/external scripts

**Key**: script path

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts]
# SCRIPT DIRECTORY
script path=
```


<a name="/settings/external scripts_timeout"/>
### timeout

**COMMAND TIMEOUT**

The maximum time in seconds that a command can execute. (if more then this execution will be aborted). NOTICE this only affects external commands not internal ones.

**Path**: /settings/external scripts

**Key**: timeout

**Default value**: 60

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts]
# COMMAND TIMEOUT
timeout=60
```




## /settings/external scripts/alias

`/settings/external scripts/alias`

**ALIAS SECTION**

A list of aliases available.
An alias is an internal command that has been predefined to provide a single command without arguments. Be careful so you don't create loops (ie check_loop=check_a, check_a=check_loop)


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [alias_cpu](#/settings/external scripts/alias_alias_cpu) |  | alias_cpu|
| [alias_cpu_ex](#/settings/external scripts/alias_alias_cpu_ex) |  | alias_cpu_ex|
| [alias_disk](#/settings/external scripts/alias_alias_disk) |  | alias_disk|
| [alias_disk_loose](#/settings/external scripts/alias_alias_disk_loose) |  | alias_disk_loose|
| [alias_event_log](#/settings/external scripts/alias_alias_event_log) |  | alias_event_log|
| [alias_file_age](#/settings/external scripts/alias_alias_file_age) |  | alias_file_age|
| [alias_file_size](#/settings/external scripts/alias_alias_file_size) |  | alias_file_size|
| [alias_mem](#/settings/external scripts/alias_alias_mem) |  | alias_mem|
| [alias_process](#/settings/external scripts/alias_alias_process) |  | alias_process|
| [alias_process_count](#/settings/external scripts/alias_alias_process_count) |  | alias_process_count|
| [alias_process_hung](#/settings/external scripts/alias_alias_process_hung) |  | alias_process_hung|
| [alias_process_stopped](#/settings/external scripts/alias_alias_process_stopped) |  | alias_process_stopped|
| [alias_sched_all](#/settings/external scripts/alias_alias_sched_all) |  | alias_sched_all|
| [alias_sched_long](#/settings/external scripts/alias_alias_sched_long) |  | alias_sched_long|
| [alias_sched_task](#/settings/external scripts/alias_alias_sched_task) |  | alias_sched_task|
| [alias_service](#/settings/external scripts/alias_alias_service) |  | alias_service|
| [alias_service_ex](#/settings/external scripts/alias_alias_service_ex) |  | alias_service_ex|
| [alias_up](#/settings/external scripts/alias_alias_up) |  | alias_up|
| [alias_volumes](#/settings/external scripts/alias_alias_volumes) |  | alias_volumes|
| [alias_volumes_loose](#/settings/external scripts/alias_alias_volumes_loose) |  | alias_volumes_loose|


**Sample**::

```
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

```


<a name="/settings/external scripts/alias_alias_cpu"/>
### alias_cpu

**alias_cpu**

To configure this create a section under: /settings/external scripts/alias/alias_cpu

**Path**: /settings/external scripts/alias

**Key**: alias_cpu

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_cpu
alias_cpu=
```


<a name="/settings/external scripts/alias_alias_cpu_ex"/>
### alias_cpu_ex

**alias_cpu_ex**

To configure this create a section under: /settings/external scripts/alias/alias_cpu_ex

**Path**: /settings/external scripts/alias

**Key**: alias_cpu_ex

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_cpu_ex
alias_cpu_ex=
```


<a name="/settings/external scripts/alias_alias_disk"/>
### alias_disk

**alias_disk**

To configure this create a section under: /settings/external scripts/alias/alias_disk

**Path**: /settings/external scripts/alias

**Key**: alias_disk

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_disk
alias_disk=
```


<a name="/settings/external scripts/alias_alias_disk_loose"/>
### alias_disk_loose

**alias_disk_loose**

To configure this create a section under: /settings/external scripts/alias/alias_disk_loose

**Path**: /settings/external scripts/alias

**Key**: alias_disk_loose

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_disk_loose
alias_disk_loose=
```


<a name="/settings/external scripts/alias_alias_event_log"/>
### alias_event_log

**alias_event_log**

To configure this create a section under: /settings/external scripts/alias/alias_event_log

**Path**: /settings/external scripts/alias

**Key**: alias_event_log

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_event_log
alias_event_log=
```


<a name="/settings/external scripts/alias_alias_file_age"/>
### alias_file_age

**alias_file_age**

To configure this create a section under: /settings/external scripts/alias/alias_file_age

**Path**: /settings/external scripts/alias

**Key**: alias_file_age

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_file_age
alias_file_age=
```


<a name="/settings/external scripts/alias_alias_file_size"/>
### alias_file_size

**alias_file_size**

To configure this create a section under: /settings/external scripts/alias/alias_file_size

**Path**: /settings/external scripts/alias

**Key**: alias_file_size

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_file_size
alias_file_size=
```


<a name="/settings/external scripts/alias_alias_mem"/>
### alias_mem

**alias_mem**

To configure this create a section under: /settings/external scripts/alias/alias_mem

**Path**: /settings/external scripts/alias

**Key**: alias_mem

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_mem
alias_mem=
```


<a name="/settings/external scripts/alias_alias_process"/>
### alias_process

**alias_process**

To configure this create a section under: /settings/external scripts/alias/alias_process

**Path**: /settings/external scripts/alias

**Key**: alias_process

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_process
alias_process=
```


<a name="/settings/external scripts/alias_alias_process_count"/>
### alias_process_count

**alias_process_count**

To configure this create a section under: /settings/external scripts/alias/alias_process_count

**Path**: /settings/external scripts/alias

**Key**: alias_process_count

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_process_count
alias_process_count=
```


<a name="/settings/external scripts/alias_alias_process_hung"/>
### alias_process_hung

**alias_process_hung**

To configure this create a section under: /settings/external scripts/alias/alias_process_hung

**Path**: /settings/external scripts/alias

**Key**: alias_process_hung

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_process_hung
alias_process_hung=
```


<a name="/settings/external scripts/alias_alias_process_stopped"/>
### alias_process_stopped

**alias_process_stopped**

To configure this create a section under: /settings/external scripts/alias/alias_process_stopped

**Path**: /settings/external scripts/alias

**Key**: alias_process_stopped

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_process_stopped
alias_process_stopped=
```


<a name="/settings/external scripts/alias_alias_sched_all"/>
### alias_sched_all

**alias_sched_all**

To configure this create a section under: /settings/external scripts/alias/alias_sched_all

**Path**: /settings/external scripts/alias

**Key**: alias_sched_all

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_sched_all
alias_sched_all=
```


<a name="/settings/external scripts/alias_alias_sched_long"/>
### alias_sched_long

**alias_sched_long**

To configure this create a section under: /settings/external scripts/alias/alias_sched_long

**Path**: /settings/external scripts/alias

**Key**: alias_sched_long

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_sched_long
alias_sched_long=
```


<a name="/settings/external scripts/alias_alias_sched_task"/>
### alias_sched_task

**alias_sched_task**

To configure this create a section under: /settings/external scripts/alias/alias_sched_task

**Path**: /settings/external scripts/alias

**Key**: alias_sched_task

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_sched_task
alias_sched_task=
```


<a name="/settings/external scripts/alias_alias_service"/>
### alias_service

**alias_service**

To configure this create a section under: /settings/external scripts/alias/alias_service

**Path**: /settings/external scripts/alias

**Key**: alias_service

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_service
alias_service=
```


<a name="/settings/external scripts/alias_alias_service_ex"/>
### alias_service_ex

**alias_service_ex**

To configure this create a section under: /settings/external scripts/alias/alias_service_ex

**Path**: /settings/external scripts/alias

**Key**: alias_service_ex

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_service_ex
alias_service_ex=
```


<a name="/settings/external scripts/alias_alias_up"/>
### alias_up

**alias_up**

To configure this create a section under: /settings/external scripts/alias/alias_up

**Path**: /settings/external scripts/alias

**Key**: alias_up

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_up
alias_up=
```


<a name="/settings/external scripts/alias_alias_volumes"/>
### alias_volumes

**alias_volumes**

To configure this create a section under: /settings/external scripts/alias/alias_volumes

**Path**: /settings/external scripts/alias

**Key**: alias_volumes

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_volumes
alias_volumes=
```


<a name="/settings/external scripts/alias_alias_volumes_loose"/>
### alias_volumes_loose

**alias_volumes_loose**

To configure this create a section under: /settings/external scripts/alias/alias_volumes_loose

**Path**: /settings/external scripts/alias

**Key**: alias_volumes_loose

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias]
# alias_volumes_loose
alias_volumes_loose=
```




## /settings/external scripts/alias/default

`/settings/external scripts/alias/default`

**ALIAS DEFENITION**

Alias definition for: default


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [alias](#/settings/external scripts/alias/default_alias) |  | ALIAS|
| [command](#/settings/external scripts/alias/default_command) |  | COMMAND|
| [is template](#/settings/external scripts/alias/default_is template) | 0 | IS TEMPLATE|
| [parent](#/settings/external scripts/alias/default_parent) | default | PARENT|


**Sample**::

```
# ALIAS DEFENITION
# Alias definition for: default
[/settings/external scripts/alias/default]
alias=
command=
is template=0
parent=default

```


<a name="/settings/external scripts/alias/default_alias"/>
### alias

**ALIAS**

The alias (service name) to report to server

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/alias/default

**Key**: alias

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias/default]
# ALIAS
alias=
```


<a name="/settings/external scripts/alias/default_command"/>
### command

**COMMAND**

Command to execute

**Path**: /settings/external scripts/alias/default

**Key**: command

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias/default]
# COMMAND
command=
```


<a name="/settings/external scripts/alias/default_is template"/>
### is template

**IS TEMPLATE**

Declare this object as a template (this means it will not be available as a separate object)

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/alias/default

**Key**: is template

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias/default]
# IS TEMPLATE
is template=0
```


<a name="/settings/external scripts/alias/default_parent"/>
### parent

**PARENT**

The parent the target inherits from

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/alias/default

**Key**: parent

**Default value**: default

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias/default]
# PARENT
parent=default
```




## /settings/external scripts/alias/sample

`/settings/external scripts/alias/sample`

**ALIAS DEFENITION**

Alias definition for: sample


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [alias](#/settings/external scripts/alias/sample_alias) |  | ALIAS|
| [command](#/settings/external scripts/alias/sample_command) |  | COMMAND|
| [is template](#/settings/external scripts/alias/sample_is template) | 0 | IS TEMPLATE|
| [parent](#/settings/external scripts/alias/sample_parent) | default | PARENT|


**Sample**::

```
# ALIAS DEFENITION
# Alias definition for: sample
[/settings/external scripts/alias/sample]
alias=
command=
is template=0
parent=default

```


<a name="/settings/external scripts/alias/sample_alias"/>
### alias

**ALIAS**

The alias (service name) to report to server

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/alias/sample

**Key**: alias

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias/sample]
# ALIAS
alias=
```


<a name="/settings/external scripts/alias/sample_command"/>
### command

**COMMAND**

Command to execute

**Path**: /settings/external scripts/alias/sample

**Key**: command

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias/sample]
# COMMAND
command=
```


<a name="/settings/external scripts/alias/sample_is template"/>
### is template

**IS TEMPLATE**

Declare this object as a template (this means it will not be available as a separate object)

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/alias/sample

**Key**: is template

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias/sample]
# IS TEMPLATE
is template=0
```


<a name="/settings/external scripts/alias/sample_parent"/>
### parent

**PARENT**

The parent the target inherits from

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/alias/sample

**Key**: parent

**Default value**: default

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/alias/sample]
# PARENT
parent=default
```




## /settings/external scripts/scripts

`/settings/external scripts/scripts`

**SCRIPT SECTION**

A list of scripts available to run from the CheckExternalScripts module. Syntax is: <command>=<script> <arguments>




**Sample**::

```
# SCRIPT SECTION
# A list of scripts available to run from the CheckExternalScripts module. Syntax is: <command>=<script> <arguments>
[/settings/external scripts/scripts]

```




## /settings/external scripts/scripts/default

`/settings/external scripts/scripts/default`

**COMMAND DEFENITION**

Command definition for: default


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [alias](#/settings/external scripts/scripts/default_alias) |  | ALIAS|
| [capture output](#/settings/external scripts/scripts/default_capture output) | 0 | CAPTURE OUTPUT|
| [command](#/settings/external scripts/scripts/default_command) |  | COMMAND|
| [display](#/settings/external scripts/scripts/default_display) | 0 | DISPLAY|
| [domain](#/settings/external scripts/scripts/default_domain) |  | DOMAIN|
| [encoding](#/settings/external scripts/scripts/default_encoding) |  | ENCODING|
| [ignore perfdata](#/settings/external scripts/scripts/default_ignore perfdata) | 0 | IGNORE PERF DATA|
| [is template](#/settings/external scripts/scripts/default_is template) | 0 | IS TEMPLATE|
| [parent](#/settings/external scripts/scripts/default_parent) | default | PARENT|
| [password](#/settings/external scripts/scripts/default_password) |  | PASSWORD|
| [session](#/settings/external scripts/scripts/default_session) |  | SESSION|
| [user](#/settings/external scripts/scripts/default_user) |  | USER|


**Sample**::

```
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

```


<a name="/settings/external scripts/scripts/default_alias"/>
### alias

**ALIAS**

The alias (service name) to report to server

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: alias

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# ALIAS
alias=
```


<a name="/settings/external scripts/scripts/default_capture output"/>
### capture output

**CAPTURE OUTPUT**

This should be set to false if you want to run commands which never terminates (i.e. relinquish control from NSClient++). The effect of this is that the command output will not be captured. The main use is to protect from socket reuse issues

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: capture output

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# CAPTURE OUTPUT
capture output=0
```


<a name="/settings/external scripts/scripts/default_command"/>
### command

**COMMAND**

Command to execute

**Path**: /settings/external scripts/scripts/default

**Key**: command

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# COMMAND
command=
```


<a name="/settings/external scripts/scripts/default_display"/>
### display

**DISPLAY**

Set to true if you want to display the resulting window or not

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: display

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# DISPLAY
display=0
```


<a name="/settings/external scripts/scripts/default_domain"/>
### domain

**DOMAIN**

The user to run the command as

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: domain

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# DOMAIN
domain=
```


<a name="/settings/external scripts/scripts/default_encoding"/>
### encoding

**ENCODING**

The encoding to parse the command as

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: encoding

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# ENCODING
encoding=
```


<a name="/settings/external scripts/scripts/default_ignore perfdata"/>
### ignore perfdata

**IGNORE PERF DATA**

Do not parse performance data from the output

**Path**: /settings/external scripts/scripts/default

**Key**: ignore perfdata

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# IGNORE PERF DATA
ignore perfdata=0
```


<a name="/settings/external scripts/scripts/default_is template"/>
### is template

**IS TEMPLATE**

Declare this object as a template (this means it will not be available as a separate object)

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: is template

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# IS TEMPLATE
is template=0
```


<a name="/settings/external scripts/scripts/default_parent"/>
### parent

**PARENT**

The parent the target inherits from

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: parent

**Default value**: default

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# PARENT
parent=default
```


<a name="/settings/external scripts/scripts/default_password"/>
### password

**PASSWORD**

The user to run the command as

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: password

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# PASSWORD
password=
```


<a name="/settings/external scripts/scripts/default_session"/>
### session

**SESSION**

Session you want to invoke the client in either the number of current for the one with a UI

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: session

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# SESSION
session=
```


<a name="/settings/external scripts/scripts/default_user"/>
### user

**USER**

The user to run the command as

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/default

**Key**: user

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/default]
# USER
user=
```




## /settings/external scripts/scripts/sample

`/settings/external scripts/scripts/sample`

**COMMAND DEFENITION**

Command definition for: sample


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [alias](#/settings/external scripts/scripts/sample_alias) |  | ALIAS|
| [capture output](#/settings/external scripts/scripts/sample_capture output) | 0 | CAPTURE OUTPUT|
| [command](#/settings/external scripts/scripts/sample_command) |  | COMMAND|
| [display](#/settings/external scripts/scripts/sample_display) | 0 | DISPLAY|
| [domain](#/settings/external scripts/scripts/sample_domain) |  | DOMAIN|
| [encoding](#/settings/external scripts/scripts/sample_encoding) |  | ENCODING|
| [ignore perfdata](#/settings/external scripts/scripts/sample_ignore perfdata) | 0 | IGNORE PERF DATA|
| [is template](#/settings/external scripts/scripts/sample_is template) | 0 | IS TEMPLATE|
| [parent](#/settings/external scripts/scripts/sample_parent) | default | PARENT|
| [password](#/settings/external scripts/scripts/sample_password) |  | PASSWORD|
| [session](#/settings/external scripts/scripts/sample_session) |  | SESSION|
| [user](#/settings/external scripts/scripts/sample_user) |  | USER|


**Sample**::

```
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

```


<a name="/settings/external scripts/scripts/sample_alias"/>
### alias

**ALIAS**

The alias (service name) to report to server

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: alias

**Default value**: 

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# ALIAS
alias=
```


<a name="/settings/external scripts/scripts/sample_capture output"/>
### capture output

**CAPTURE OUTPUT**

This should be set to false if you want to run commands which never terminates (i.e. relinquish control from NSClient++). The effect of this is that the command output will not be captured. The main use is to protect from socket reuse issues

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: capture output

**Default value**: 0

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# CAPTURE OUTPUT
capture output=0
```


<a name="/settings/external scripts/scripts/sample_command"/>
### command

**COMMAND**

Command to execute

**Path**: /settings/external scripts/scripts/sample

**Key**: command

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# COMMAND
command=
```


<a name="/settings/external scripts/scripts/sample_display"/>
### display

**DISPLAY**

Set to true if you want to display the resulting window or not

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: display

**Default value**: 0

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# DISPLAY
display=0
```


<a name="/settings/external scripts/scripts/sample_domain"/>
### domain

**DOMAIN**

The user to run the command as

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: domain

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# DOMAIN
domain=
```


<a name="/settings/external scripts/scripts/sample_encoding"/>
### encoding

**ENCODING**

The encoding to parse the command as

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: encoding

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# ENCODING
encoding=
```


<a name="/settings/external scripts/scripts/sample_ignore perfdata"/>
### ignore perfdata

**IGNORE PERF DATA**

Do not parse performance data from the output

**Path**: /settings/external scripts/scripts/sample

**Key**: ignore perfdata

**Default value**: 0

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# IGNORE PERF DATA
ignore perfdata=0
```


<a name="/settings/external scripts/scripts/sample_is template"/>
### is template

**IS TEMPLATE**

Declare this object as a template (this means it will not be available as a separate object)

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: is template

**Default value**: 0

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# IS TEMPLATE
is template=0
```


<a name="/settings/external scripts/scripts/sample_parent"/>
### parent

**PARENT**

The parent the target inherits from

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: parent

**Default value**: default

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# PARENT
parent=default
```


<a name="/settings/external scripts/scripts/sample_password"/>
### password

**PASSWORD**

The user to run the command as

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: password

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# PASSWORD
password=
```


<a name="/settings/external scripts/scripts/sample_session"/>
### session

**SESSION**

Session you want to invoke the client in either the number of current for the one with a UI

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: session

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# SESSION
session=
```


<a name="/settings/external scripts/scripts/sample_user"/>
### user

**USER**

The user to run the command as

**Advanced** (means it is not commonly used)

**Path**: /settings/external scripts/scripts/sample

**Key**: user

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckExternalScripts`

**Sample**::

```
[/settings/external scripts/scripts/sample]
# USER
user=
```




## /settings/external scripts/wrapped scripts

`/settings/external scripts/wrapped scripts`

**WRAPPED SCRIPTS SECTION**

A list of wrapped scripts (ie. scruts using a template mechanism). The template used will be defined by the extension of the script.




**Sample**::

```
# WRAPPED SCRIPTS SECTION
# A list of wrapped scripts (ie. scruts using a template mechanism). The template used will be defined by the extension of the script.
[/settings/external scripts/wrapped scripts]

```




## /settings/external scripts/wrappings

`/settings/external scripts/wrappings`

**in flight**

TODO


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [bat](#/settings/external scripts/wrappings_bat) |  | BATCH FILE WRAPPING|
| [ps1](#/settings/external scripts/wrappings_ps1) |  | POWERSHELL WRAPPING|
| [vbs](#/settings/external scripts/wrappings_vbs) |  | VISUAL BASIC WRAPPING|


**Sample**::

```
# in flight
# TODO
[/settings/external scripts/wrappings]
bat=
ps1=
vbs=

```


<a name="/settings/external scripts/wrappings_bat"/>
### bat

**BATCH FILE WRAPPING**



**Path**: /settings/external scripts/wrappings

**Key**: bat

**Default value**: 

**Used by**: :module:`CheckExternalScripts`,  :module:`Failed to find plugin: 99`

**Sample**::

```
[/settings/external scripts/wrappings]
# BATCH FILE WRAPPING
bat=
```


<a name="/settings/external scripts/wrappings_ps1"/>
### ps1

**POWERSHELL WRAPPING**



**Path**: /settings/external scripts/wrappings

**Key**: ps1

**Default value**: 

**Used by**: :module:`CheckExternalScripts`,  :module:`Failed to find plugin: 99`

**Sample**::

```
[/settings/external scripts/wrappings]
# POWERSHELL WRAPPING
ps1=
```


<a name="/settings/external scripts/wrappings_vbs"/>
### vbs

**VISUAL BASIC WRAPPING**



**Path**: /settings/external scripts/wrappings

**Key**: vbs

**Default value**: 

**Used by**: :module:`CheckExternalScripts`,  :module:`Failed to find plugin: 99`

**Sample**::

```
[/settings/external scripts/wrappings]
# VISUAL BASIC WRAPPING
vbs=
```


