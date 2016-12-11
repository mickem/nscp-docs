# NRDPClient

NRDP client can be used both from command line and from queries to check remote systes via NRDP

## Query list

A list of all available queries (check commands)

| Command | Description|
| ------- | -----------|
| [submit_nrdp](#submit_nrdp) | Submit information to the remote NRDP Server.|




## Command list

**TODO:** Add a list of all external commands (this is not check commands)

## Configuration list


Common Keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/NRDP/client](#/settings/NRDP/client) | [channel](#/settings/NRDP/client_channel) | CHANNEL|
| [/settings/NRDP/client](#/settings/NRDP/client) | [hostname](#/settings/NRDP/client_hostname) | HOSTNAME|
| [/settings/NRDP/client/targets/default](#/settings/NRDP/client/targets/default) | [address](#/settings/NRDP/client/targets/default_address) | TARGET ADDRESS|
| [/settings/NRDP/client/targets/default](#/settings/NRDP/client/targets/default) | [key](#/settings/NRDP/client/targets/default_key) | SECURITY TOKEN|
| [/settings/NRDP/client/targets/default](#/settings/NRDP/client/targets/default) | [password](#/settings/NRDP/client/targets/default_password) | SECURITY TOKEN|
| [/settings/NRDP/client/targets/default](#/settings/NRDP/client/targets/default) | [retries](#/settings/NRDP/client/targets/default_retries) | RETRIES|
| [/settings/NRDP/client/targets/default](#/settings/NRDP/client/targets/default) | [timeout](#/settings/NRDP/client/targets/default_timeout) | TIMEOUT|
| [/settings/NRDP/client/targets/default](#/settings/NRDP/client/targets/default) | [token](#/settings/NRDP/client/targets/default_token) | SECURITY TOKEN|

Advanced keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/NRDP/client/targets/default](#/settings/NRDP/client/targets/default) | [host](#/settings/NRDP/client/targets/default_host) | TARGET HOST|
| [/settings/NRDP/client/targets/default](#/settings/NRDP/client/targets/default) | [port](#/settings/NRDP/client/targets/default_port) | TARGET PORT|

Sample keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/NRDP/client/targets/sample](#/settings/NRDP/client/targets/sample) | [address](#/settings/NRDP/client/targets/sample_address) | TARGET ADDRESS|
| [/settings/NRDP/client/targets/sample](#/settings/NRDP/client/targets/sample) | [host](#/settings/NRDP/client/targets/sample_host) | TARGET HOST|
| [/settings/NRDP/client/targets/sample](#/settings/NRDP/client/targets/sample) | [key](#/settings/NRDP/client/targets/sample_key) | SECURITY TOKEN|
| [/settings/NRDP/client/targets/sample](#/settings/NRDP/client/targets/sample) | [password](#/settings/NRDP/client/targets/sample_password) | SECURITY TOKEN|
| [/settings/NRDP/client/targets/sample](#/settings/NRDP/client/targets/sample) | [port](#/settings/NRDP/client/targets/sample_port) | TARGET PORT|
| [/settings/NRDP/client/targets/sample](#/settings/NRDP/client/targets/sample) | [retries](#/settings/NRDP/client/targets/sample_retries) | RETRIES|
| [/settings/NRDP/client/targets/sample](#/settings/NRDP/client/targets/sample) | [timeout](#/settings/NRDP/client/targets/sample_timeout) | TIMEOUT|
| [/settings/NRDP/client/targets/sample](#/settings/NRDP/client/targets/sample) | [token](#/settings/NRDP/client/targets/sample_token) | SECURITY TOKEN|



# Queries

A quick reference for all available queries (check commands) in the NRDPClient module.

## submit_nrdp

Submit information to the remote NRDP Server.


### Usage



| Option | Default Value | Description|
| ------ | ------------- | -----------|
| [help](#submit_nrdp_help) | N/A | Show help screen (this screen)|
| [help-pb](#submit_nrdp_help-pb) | N/A | Show help screen as a protocol buffer payload|
| [show-default](#submit_nrdp_show-default) | N/A | Show default values for a given command|
| [help-short](#submit_nrdp_help-short) | N/A | Show help screen (short format).|
| [host](#submit_nrdp_host) |  | The host of the host running the server|
| [port](#submit_nrdp_port) |  | The port of the host running the server|
| [address](#submit_nrdp_address) |  | The address (host:port) of the host running the server|
| [timeout](#submit_nrdp_timeout) |  | Number of seconds before connection times out (default=10)|
| [target](#submit_nrdp_target) |  | Target to use (lookup connection info from config)|
| [retry](#submit_nrdp_retry) |  | Number of times ti retry a failed connection attempt (default=2)|
| [retries](#submit_nrdp_retries) |  | legacy version of retry|
| [source-host](#submit_nrdp_source-host) |  | Source/sender host name (default is auto which means use the name of the actual host)|
| [sender-host](#submit_nrdp_sender-host) |  | Source/sender host name (default is auto which means use the name of the actual host)|
| [command](#submit_nrdp_command) |  | The name of the command that the remote daemon should run|
| [alias](#submit_nrdp_alias) |  | Same as command|
| [message](#submit_nrdp_message) |  | Message|
| [result](#submit_nrdp_result) |  | Result code either a number or OK, WARN, CRIT, UNKNOWN|
| [separator](#submit_nrdp_separator) |  | Separator to use for the batch command (default is |)|
| [batch](#submit_nrdp_batch) |  | Add multiple records using the separator format is: command|result|message|
| [key](#submit_nrdp_key) |  | The security token|
| [password](#submit_nrdp_password) |  | The security token|
| [source-host](#submit_nrdp_source-host) |  | Source/sender host name (default is auto which means use the name of the actual host)|
| [sender-host](#submit_nrdp_sender-host) |  | Source/sender host name (default is auto which means use the name of the actual host)|
| [token](#submit_nrdp_token) |  | The security token|


<a name="submit_nrdp_help"/>
### help



**Description:**
Show help screen (this screen)

<a name="submit_nrdp_help-pb"/>
### help-pb



**Description:**
Show help screen as a protocol buffer payload

<a name="submit_nrdp_show-default"/>
### show-default



**Description:**
Show default values for a given command

<a name="submit_nrdp_help-short"/>
### help-short



**Description:**
Show help screen (short format).

<a name="submit_nrdp_host"/>
### host



**Description:**
The host of the host running the server

<a name="submit_nrdp_port"/>
### port



**Description:**
The port of the host running the server

<a name="submit_nrdp_address"/>
### address



**Description:**
The address (host:port) of the host running the server

<a name="submit_nrdp_timeout"/>
### timeout



**Description:**
Number of seconds before connection times out (default=10)

<a name="submit_nrdp_target"/>
### target



**Description:**
Target to use (lookup connection info from config)

<a name="submit_nrdp_retry"/>
### retry



**Description:**
Number of times ti retry a failed connection attempt (default=2)

<a name="submit_nrdp_retries"/>
### retries



**Description:**
legacy version of retry

<a name="submit_nrdp_source-host"/>
### source-host



**Description:**
Source/sender host name (default is auto which means use the name of the actual host)

<a name="submit_nrdp_sender-host"/>
### sender-host



**Description:**
Source/sender host name (default is auto which means use the name of the actual host)

<a name="submit_nrdp_command"/>
### command



**Description:**
The name of the command that the remote daemon should run

<a name="submit_nrdp_alias"/>
### alias



**Description:**
Same as command

<a name="submit_nrdp_message"/>
### message



**Description:**
Message

<a name="submit_nrdp_result"/>
### result



**Description:**
Result code either a number or OK, WARN, CRIT, UNKNOWN

<a name="submit_nrdp_separator"/>
### separator



**Description:**
Separator to use for the batch command (default is |)

<a name="submit_nrdp_batch"/>
### batch



**Description:**
Add multiple records using the separator format is: command|result|message

<a name="submit_nrdp_key"/>
### key



**Description:**
The security token

<a name="submit_nrdp_password"/>
### password



**Description:**
The security token

<a name="submit_nrdp_source-host"/>
### source-host



**Description:**
Source/sender host name (default is auto which means use the name of the actual host)

<a name="submit_nrdp_sender-host"/>
### sender-host



**Description:**
Source/sender host name (default is auto which means use the name of the actual host)

<a name="submit_nrdp_token"/>
### token



**Description:**
The security token



# Configuration



## /settings/NRDP/client

`/settings/NRDP/client`

**SMTP CLIENT SECTION**

Section for SMTP passive check module.


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [channel](#/settings/NRDP/client_channel) | NRDP | CHANNEL|
| [hostname](#/settings/NRDP/client_hostname) | auto | HOSTNAME|


**Sample**::

```
# SMTP CLIENT SECTION
# Section for SMTP passive check module.
[/settings/NRDP/client]
channel=NRDP
hostname=auto

```


<a name="/settings/NRDP/client_channel"/>
### channel

**CHANNEL**

The channel to listen to.

**Path**: /settings/NRDP/client

**Key**: channel

**Default value**: NRDP

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client]
# CHANNEL
channel=NRDP
```


<a name="/settings/NRDP/client_hostname"/>
### hostname

**HOSTNAME**

The host name of the monitored computer.
Set this to auto (default) to use the windows name of the computer.

auto	Hostname
${host}	Hostname
${host_lc}
Hostname in lowercase
${host_uc}	Hostname in uppercase
${domain}	Domainname
${domain_lc}	Domainname in lowercase
${domain_uc}	Domainname in uppercase


**Path**: /settings/NRDP/client

**Key**: hostname

**Default value**: auto

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client]
# HOSTNAME
hostname=auto
```




## /settings/NRDP/client/handlers

`/settings/NRDP/client/handlers`

**CLIENT HANDLER SECTION**






**Sample**::

```
# CLIENT HANDLER SECTION
# 
[/settings/NRDP/client/handlers]

```




## /settings/NRDP/client/targets

`/settings/NRDP/client/targets`

**REMOTE TARGET DEFINITIONS**






**Sample**::

```
# REMOTE TARGET DEFINITIONS
# 
[/settings/NRDP/client/targets]

```




## /settings/NRDP/client/targets/default

`/settings/NRDP/client/targets/default`

**TARGET**

Target definition for: default


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [address](#/settings/NRDP/client/targets/default_address) |  | TARGET ADDRESS|
| [host](#/settings/NRDP/client/targets/default_host) |  | TARGET HOST|
| [key](#/settings/NRDP/client/targets/default_key) |  | SECURITY TOKEN|
| [password](#/settings/NRDP/client/targets/default_password) |  | SECURITY TOKEN|
| [port](#/settings/NRDP/client/targets/default_port) |  | TARGET PORT|
| [retries](#/settings/NRDP/client/targets/default_retries) | 3 | RETRIES|
| [timeout](#/settings/NRDP/client/targets/default_timeout) | 30 | TIMEOUT|
| [token](#/settings/NRDP/client/targets/default_token) |  | SECURITY TOKEN|


**Sample**::

```
# TARGET
# Target definition for: default
[/settings/NRDP/client/targets/default]
address=
host=
key=
password=
port=
retries=3
timeout=30
token=

```


<a name="/settings/NRDP/client/targets/default_address"/>
### address

**TARGET ADDRESS**

Target host address

**Path**: /settings/NRDP/client/targets/default

**Key**: address

**Default value**: 

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/default]
# TARGET ADDRESS
address=
```


<a name="/settings/NRDP/client/targets/default_host"/>
### host

**TARGET HOST**

The target server to report results to.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRDP/client/targets/default

**Key**: host

**Default value**: 

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/default]
# TARGET HOST
host=
```


<a name="/settings/NRDP/client/targets/default_key"/>
### key

**SECURITY TOKEN**

The security token

**Path**: /settings/NRDP/client/targets/default

**Key**: key

**Default value**: 

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/default]
# SECURITY TOKEN
key=
```


<a name="/settings/NRDP/client/targets/default_password"/>
### password

**SECURITY TOKEN**

The security token

**Path**: /settings/NRDP/client/targets/default

**Key**: password

**Default value**: 

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/default]
# SECURITY TOKEN
password=
```


<a name="/settings/NRDP/client/targets/default_port"/>
### port

**TARGET PORT**

The target server port

**Advanced** (means it is not commonly used)

**Path**: /settings/NRDP/client/targets/default

**Key**: port

**Default value**: 

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/default]
# TARGET PORT
port=
```


<a name="/settings/NRDP/client/targets/default_retries"/>
### retries

**RETRIES**

Number of times to retry sending.

**Path**: /settings/NRDP/client/targets/default

**Key**: retries

**Default value**: 3

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/default]
# RETRIES
retries=3
```


<a name="/settings/NRDP/client/targets/default_timeout"/>
### timeout

**TIMEOUT**

Timeout when reading/writing packets to/from sockets.

**Path**: /settings/NRDP/client/targets/default

**Key**: timeout

**Default value**: 30

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/default]
# TIMEOUT
timeout=30
```


<a name="/settings/NRDP/client/targets/default_token"/>
### token

**SECURITY TOKEN**

The security token

**Path**: /settings/NRDP/client/targets/default

**Key**: token

**Default value**: 

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/default]
# SECURITY TOKEN
token=
```




## /settings/NRDP/client/targets/sample

`/settings/NRDP/client/targets/sample`

**TARGET**

Target definition for: sample


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [address](#/settings/NRDP/client/targets/sample_address) |  | TARGET ADDRESS|
| [host](#/settings/NRDP/client/targets/sample_host) |  | TARGET HOST|
| [key](#/settings/NRDP/client/targets/sample_key) |  | SECURITY TOKEN|
| [password](#/settings/NRDP/client/targets/sample_password) |  | SECURITY TOKEN|
| [port](#/settings/NRDP/client/targets/sample_port) |  | TARGET PORT|
| [retries](#/settings/NRDP/client/targets/sample_retries) | 3 | RETRIES|
| [timeout](#/settings/NRDP/client/targets/sample_timeout) | 30 | TIMEOUT|
| [token](#/settings/NRDP/client/targets/sample_token) |  | SECURITY TOKEN|


**Sample**::

```
# TARGET
# Target definition for: sample
[/settings/NRDP/client/targets/sample]
address=
host=
key=
password=
port=
retries=3
timeout=30
token=

```


<a name="/settings/NRDP/client/targets/sample_address"/>
### address

**TARGET ADDRESS**

Target host address

**Path**: /settings/NRDP/client/targets/sample

**Key**: address

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/sample]
# TARGET ADDRESS
address=
```


<a name="/settings/NRDP/client/targets/sample_host"/>
### host

**TARGET HOST**

The target server to report results to.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRDP/client/targets/sample

**Key**: host

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/sample]
# TARGET HOST
host=
```


<a name="/settings/NRDP/client/targets/sample_key"/>
### key

**SECURITY TOKEN**

The security token

**Path**: /settings/NRDP/client/targets/sample

**Key**: key

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/sample]
# SECURITY TOKEN
key=
```


<a name="/settings/NRDP/client/targets/sample_password"/>
### password

**SECURITY TOKEN**

The security token

**Path**: /settings/NRDP/client/targets/sample

**Key**: password

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/sample]
# SECURITY TOKEN
password=
```


<a name="/settings/NRDP/client/targets/sample_port"/>
### port

**TARGET PORT**

The target server port

**Advanced** (means it is not commonly used)

**Path**: /settings/NRDP/client/targets/sample

**Key**: port

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/sample]
# TARGET PORT
port=
```


<a name="/settings/NRDP/client/targets/sample_retries"/>
### retries

**RETRIES**

Number of times to retry sending.

**Path**: /settings/NRDP/client/targets/sample

**Key**: retries

**Default value**: 3

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/sample]
# RETRIES
retries=3
```


<a name="/settings/NRDP/client/targets/sample_timeout"/>
### timeout

**TIMEOUT**

Timeout when reading/writing packets to/from sockets.

**Path**: /settings/NRDP/client/targets/sample

**Key**: timeout

**Default value**: 30

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/sample]
# TIMEOUT
timeout=30
```


<a name="/settings/NRDP/client/targets/sample_token"/>
### token

**SECURITY TOKEN**

The security token

**Path**: /settings/NRDP/client/targets/sample

**Key**: token

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`NRDPClient`

**Sample**::

```
[/settings/NRDP/client/targets/sample]
# SECURITY TOKEN
token=
```


