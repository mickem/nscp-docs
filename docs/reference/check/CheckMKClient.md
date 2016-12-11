# CheckMKClient

check_mk client can be used both from command line and from queries to check remote systes via check_mk

## Query list

A list of all available queries (check commands)

| Command | Description|
| ------- | -----------|
| [check_mk_query](#check_mk_query) | Request remote information via check_mk.|




## Command list

**TODO:** Add a list of all external commands (this is not check commands)

## Configuration list


Common Keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/check_mk/client](#/settings/check_mk/client) | [channel](#/settings/check_mk/client_channel) | CHANNEL|
| [/settings/check_mk/client/targets/default](#/settings/check_mk/client/targets/default) | [address](#/settings/check_mk/client/targets/default_address) | TARGET ADDRESS|
| [/settings/check_mk/client/targets/default](#/settings/check_mk/client/targets/default) | [retries](#/settings/check_mk/client/targets/default_retries) | RETRIES|
| [/settings/check_mk/client/targets/default](#/settings/check_mk/client/targets/default) | [timeout](#/settings/check_mk/client/targets/default_timeout) | TIMEOUT|

Advanced keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/check_mk/client/targets/default](#/settings/check_mk/client/targets/default) | [host](#/settings/check_mk/client/targets/default_host) | TARGET HOST|
| [/settings/check_mk/client/targets/default](#/settings/check_mk/client/targets/default) | [port](#/settings/check_mk/client/targets/default_port) | TARGET PORT|

Sample keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/check_mk/client/targets/sample](#/settings/check_mk/client/targets/sample) | [address](#/settings/check_mk/client/targets/sample_address) | TARGET ADDRESS|
| [/settings/check_mk/client/targets/sample](#/settings/check_mk/client/targets/sample) | [host](#/settings/check_mk/client/targets/sample_host) | TARGET HOST|
| [/settings/check_mk/client/targets/sample](#/settings/check_mk/client/targets/sample) | [port](#/settings/check_mk/client/targets/sample_port) | TARGET PORT|
| [/settings/check_mk/client/targets/sample](#/settings/check_mk/client/targets/sample) | [retries](#/settings/check_mk/client/targets/sample_retries) | RETRIES|
| [/settings/check_mk/client/targets/sample](#/settings/check_mk/client/targets/sample) | [timeout](#/settings/check_mk/client/targets/sample_timeout) | TIMEOUT|



# Queries

A quick reference for all available queries (check commands) in the CheckMKClient module.

## check_mk_query

Request remote information via check_mk.


### Usage



| Option | Default Value | Description|
| ------ | ------------- | -----------|
| [help](#check_mk_query_help) | N/A | Show help screen (this screen)|
| [help-pb](#check_mk_query_help-pb) | N/A | Show help screen as a protocol buffer payload|
| [show-default](#check_mk_query_show-default) | N/A | Show default values for a given command|
| [help-short](#check_mk_query_help-short) | N/A | Show help screen (short format).|
| [host](#check_mk_query_host) |  | The host of the host running the server|
| [port](#check_mk_query_port) |  | The port of the host running the server|
| [address](#check_mk_query_address) |  | The address (host:port) of the host running the server|
| [timeout](#check_mk_query_timeout) |  | Number of seconds before connection times out (default=10)|
| [target](#check_mk_query_target) |  | Target to use (lookup connection info from config)|
| [retry](#check_mk_query_retry) |  | Number of times ti retry a failed connection attempt (default=2)|
| [retries](#check_mk_query_retries) |  | legacy version of retry|
| [source-host](#check_mk_query_source-host) |  | Source/sender host name (default is auto which means use the name of the actual host)|
| [sender-host](#check_mk_query_sender-host) |  | Source/sender host name (default is auto which means use the name of the actual host)|
| [command](#check_mk_query_command) |  | The name of the command that the remote daemon should run|
| [argument](#check_mk_query_argument) |  | Set command line arguments|
| [separator](#check_mk_query_separator) |  | Separator to use for the batch command (default is |)|
| [batch](#check_mk_query_batch) |  | Add multiple records using the separator format is: command|argument|argument|
| [certificate](#check_mk_query_certificate) |  | Length of payload (has to be same as on the server)|
| [dh](#check_mk_query_dh) |  | Length of payload (has to be same as on the server)|
| [certificate-key](#check_mk_query_certificate-key) |  | Client certificate to use|
| [certificate-format](#check_mk_query_certificate-format) |  | Client certificate format|
| [ca](#check_mk_query_ca) |  | Certificate authority|
| [verify](#check_mk_query_verify) |  | Client certificate format|
| [allowed-ciphers](#check_mk_query_allowed-ciphers) |  | Client certificate format|
| [ssl](#check_mk_query_ssl) | 1 | Initial an ssl handshake with the server.|


<a name="check_mk_query_help"/>
### help



**Description:**
Show help screen (this screen)

<a name="check_mk_query_help-pb"/>
### help-pb



**Description:**
Show help screen as a protocol buffer payload

<a name="check_mk_query_show-default"/>
### show-default



**Description:**
Show default values for a given command

<a name="check_mk_query_help-short"/>
### help-short



**Description:**
Show help screen (short format).

<a name="check_mk_query_host"/>
### host



**Description:**
The host of the host running the server

<a name="check_mk_query_port"/>
### port



**Description:**
The port of the host running the server

<a name="check_mk_query_address"/>
### address



**Description:**
The address (host:port) of the host running the server

<a name="check_mk_query_timeout"/>
### timeout



**Description:**
Number of seconds before connection times out (default=10)

<a name="check_mk_query_target"/>
### target



**Description:**
Target to use (lookup connection info from config)

<a name="check_mk_query_retry"/>
### retry



**Description:**
Number of times ti retry a failed connection attempt (default=2)

<a name="check_mk_query_retries"/>
### retries



**Description:**
legacy version of retry

<a name="check_mk_query_source-host"/>
### source-host



**Description:**
Source/sender host name (default is auto which means use the name of the actual host)

<a name="check_mk_query_sender-host"/>
### sender-host



**Description:**
Source/sender host name (default is auto which means use the name of the actual host)

<a name="check_mk_query_command"/>
### command



**Description:**
The name of the command that the remote daemon should run

<a name="check_mk_query_argument"/>
### argument



**Description:**
Set command line arguments

<a name="check_mk_query_separator"/>
### separator



**Description:**
Separator to use for the batch command (default is |)

<a name="check_mk_query_batch"/>
### batch



**Description:**
Add multiple records using the separator format is: command|argument|argument

<a name="check_mk_query_certificate"/>
### certificate



**Description:**
Length of payload (has to be same as on the server)

<a name="check_mk_query_dh"/>
### dh



**Description:**
Length of payload (has to be same as on the server)

<a name="check_mk_query_certificate-key"/>
### certificate-key



**Description:**
Client certificate to use

<a name="check_mk_query_certificate-format"/>
### certificate-format



**Description:**
Client certificate format

<a name="check_mk_query_ca"/>
### ca



**Description:**
Certificate authority

<a name="check_mk_query_verify"/>
### verify



**Description:**
Client certificate format

<a name="check_mk_query_allowed-ciphers"/>
### allowed-ciphers



**Description:**
Client certificate format

<a name="check_mk_query_ssl"/>
### ssl


**Deafult Value:** 1

**Description:**
Initial an ssl handshake with the server.



# Configuration



## /settings/check_mk/client

`/settings/check_mk/client`

**CHECK MK CLIENT SECTION**

Section for check_mk active/passive check module.


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [channel](#/settings/check_mk/client_channel) | CheckMK | CHANNEL|


**Sample**::

```
# CHECK MK CLIENT SECTION
# Section for check_mk active/passive check module.
[/settings/check_mk/client]
channel=CheckMK

```


<a name="/settings/check_mk/client_channel"/>
### channel

**CHANNEL**

The channel to listen to.

**Path**: /settings/check_mk/client

**Key**: channel

**Default value**: CheckMK

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client]
# CHANNEL
channel=CheckMK
```




## /settings/check_mk/client/handlers

`/settings/check_mk/client/handlers`

**CLIENT HANDLER SECTION**






**Sample**::

```
# CLIENT HANDLER SECTION
# 
[/settings/check_mk/client/handlers]

```




## /settings/check_mk/client/scripts

`/settings/check_mk/client/scripts`

**REMOTE TARGET DEFINITIONS**






**Sample**::

```
# REMOTE TARGET DEFINITIONS
# 
[/settings/check_mk/client/scripts]

```




## /settings/check_mk/client/targets

`/settings/check_mk/client/targets`

**REMOTE TARGET DEFINITIONS**






**Sample**::

```
# REMOTE TARGET DEFINITIONS
# 
[/settings/check_mk/client/targets]

```




## /settings/check_mk/client/targets/default

`/settings/check_mk/client/targets/default`

**TARGET**

Target definition for: default


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [address](#/settings/check_mk/client/targets/default_address) |  | TARGET ADDRESS|
| [host](#/settings/check_mk/client/targets/default_host) |  | TARGET HOST|
| [port](#/settings/check_mk/client/targets/default_port) |  | TARGET PORT|
| [retries](#/settings/check_mk/client/targets/default_retries) | 3 | RETRIES|
| [timeout](#/settings/check_mk/client/targets/default_timeout) | 30 | TIMEOUT|


**Sample**::

```
# TARGET
# Target definition for: default
[/settings/check_mk/client/targets/default]
address=
host=
port=
retries=3
timeout=30

```


<a name="/settings/check_mk/client/targets/default_address"/>
### address

**TARGET ADDRESS**

Target host address

**Path**: /settings/check_mk/client/targets/default

**Key**: address

**Default value**: 

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/default]
# TARGET ADDRESS
address=
```


<a name="/settings/check_mk/client/targets/default_host"/>
### host

**TARGET HOST**

The target server to report results to.

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/client/targets/default

**Key**: host

**Default value**: 

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/default]
# TARGET HOST
host=
```


<a name="/settings/check_mk/client/targets/default_port"/>
### port

**TARGET PORT**

The target server port

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/client/targets/default

**Key**: port

**Default value**: 

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/default]
# TARGET PORT
port=
```


<a name="/settings/check_mk/client/targets/default_retries"/>
### retries

**RETRIES**

Number of times to retry sending.

**Path**: /settings/check_mk/client/targets/default

**Key**: retries

**Default value**: 3

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/default]
# RETRIES
retries=3
```


<a name="/settings/check_mk/client/targets/default_timeout"/>
### timeout

**TIMEOUT**

Timeout when reading/writing packets to/from sockets.

**Path**: /settings/check_mk/client/targets/default

**Key**: timeout

**Default value**: 30

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/default]
# TIMEOUT
timeout=30
```




## /settings/check_mk/client/targets/sample

`/settings/check_mk/client/targets/sample`

**TARGET**

Target definition for: sample


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [address](#/settings/check_mk/client/targets/sample_address) |  | TARGET ADDRESS|
| [host](#/settings/check_mk/client/targets/sample_host) |  | TARGET HOST|
| [port](#/settings/check_mk/client/targets/sample_port) |  | TARGET PORT|
| [retries](#/settings/check_mk/client/targets/sample_retries) | 3 | RETRIES|
| [timeout](#/settings/check_mk/client/targets/sample_timeout) | 30 | TIMEOUT|


**Sample**::

```
# TARGET
# Target definition for: sample
[/settings/check_mk/client/targets/sample]
address=
host=
port=
retries=3
timeout=30

```


<a name="/settings/check_mk/client/targets/sample_address"/>
### address

**TARGET ADDRESS**

Target host address

**Path**: /settings/check_mk/client/targets/sample

**Key**: address

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/sample]
# TARGET ADDRESS
address=
```


<a name="/settings/check_mk/client/targets/sample_host"/>
### host

**TARGET HOST**

The target server to report results to.

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/client/targets/sample

**Key**: host

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/sample]
# TARGET HOST
host=
```


<a name="/settings/check_mk/client/targets/sample_port"/>
### port

**TARGET PORT**

The target server port

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/client/targets/sample

**Key**: port

**Default value**: 

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/sample]
# TARGET PORT
port=
```


<a name="/settings/check_mk/client/targets/sample_retries"/>
### retries

**RETRIES**

Number of times to retry sending.

**Path**: /settings/check_mk/client/targets/sample

**Key**: retries

**Default value**: 3

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/sample]
# RETRIES
retries=3
```


<a name="/settings/check_mk/client/targets/sample_timeout"/>
### timeout

**TIMEOUT**

Timeout when reading/writing packets to/from sockets.

**Path**: /settings/check_mk/client/targets/sample

**Key**: timeout

**Default value**: 30

**Sample key**: This key is provided as a sample to show how to configure objects

**Used by**: :module:`CheckMKClient`

**Sample**::

```
[/settings/check_mk/client/targets/sample]
# TIMEOUT
timeout=30
```


