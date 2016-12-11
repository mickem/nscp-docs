# NRPEServer

A server that listens for incoming NRPE connection and processes incoming requests.





## Command list

**TODO:** Add a list of all external commands (this is not check commands)

## Configuration list


Common Keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/default](#/settings/default) | [allowed hosts](#/settings/default_allowed hosts) | ALLOWED HOSTS|
| [/settings/default](#/settings/default) | [bind to](#/settings/default_bind to) | BIND TO ADDRESS|
| [/settings/default](#/settings/default) | [cache allowed hosts](#/settings/default_cache allowed hosts) | CACHE ALLOWED HOSTS|
| [/settings/default](#/settings/default) | [inbox](#/settings/default_inbox) | INBOX|
| [/settings/default](#/settings/default) | [password](#/settings/default_password) | PASSWORD|
| [/settings/default](#/settings/default) | [timeout](#/settings/default_timeout) | TIMEOUT|
| [/settings/NRPE/server](#/settings/NRPE/server) | [allow arguments](#/settings/NRPE/server_allow arguments) | COMMAND ARGUMENT PROCESSING|
| [/settings/NRPE/server](#/settings/NRPE/server) | [allow nasty characters](#/settings/NRPE/server_allow nasty characters) | COMMAND ALLOW NASTY META CHARS|
| [/settings/NRPE/server](#/settings/NRPE/server) | [extended response](#/settings/NRPE/server_extended response) | EXTENDED RESPONSE|
| [/settings/NRPE/server](#/settings/NRPE/server) | [insecure](#/settings/NRPE/server_insecure) | ALLOW INSECURE CHIPHERS and ENCRYPTION|
| [/settings/NRPE/server](#/settings/NRPE/server) | [port](#/settings/NRPE/server_port) | PORT NUMBER|
| [/settings/NRPE/server](#/settings/NRPE/server) | [use ssl](#/settings/NRPE/server_use ssl) | ENABLE SSL ENCRYPTION|

Advanced keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/default](#/settings/default) | [encoding](#/settings/default_encoding) | NRPE PAYLOAD ENCODING|
| [/settings/default](#/settings/default) | [socket queue size](#/settings/default_socket queue size) | LISTEN QUEUE|
| [/settings/default](#/settings/default) | [thread pool](#/settings/default_thread pool) | THREAD POOL|
| [/settings/NRPE/server](#/settings/NRPE/server) | [allowed ciphers](#/settings/NRPE/server_allowed ciphers) | ALLOWED CIPHERS|
| [/settings/NRPE/server](#/settings/NRPE/server) | [allowed hosts](#/settings/NRPE/server_allowed hosts) | ALLOWED HOSTS|
| [/settings/NRPE/server](#/settings/NRPE/server) | [bind to](#/settings/NRPE/server_bind to) | BIND TO ADDRESS|
| [/settings/NRPE/server](#/settings/NRPE/server) | [ca](#/settings/NRPE/server_ca) | CA|
| [/settings/NRPE/server](#/settings/NRPE/server) | [cache allowed hosts](#/settings/NRPE/server_cache allowed hosts) | CACHE ALLOWED HOSTS|
| [/settings/NRPE/server](#/settings/NRPE/server) | [certificate](#/settings/NRPE/server_certificate) | SSL CERTIFICATE|
| [/settings/NRPE/server](#/settings/NRPE/server) | [certificate format](#/settings/NRPE/server_certificate format) | CERTIFICATE FORMAT|
| [/settings/NRPE/server](#/settings/NRPE/server) | [certificate key](#/settings/NRPE/server_certificate key) | SSL CERTIFICATE|
| [/settings/NRPE/server](#/settings/NRPE/server) | [dh](#/settings/NRPE/server_dh) | DH KEY|
| [/settings/NRPE/server](#/settings/NRPE/server) | [encoding](#/settings/NRPE/server_encoding) | NRPE PAYLOAD ENCODING|
| [/settings/NRPE/server](#/settings/NRPE/server) | [payload length](#/settings/NRPE/server_payload length) | PAYLOAD LENGTH|
| [/settings/NRPE/server](#/settings/NRPE/server) | [performance data](#/settings/NRPE/server_performance data) | PERFORMANCE DATA|
| [/settings/NRPE/server](#/settings/NRPE/server) | [socket queue size](#/settings/NRPE/server_socket queue size) | LISTEN QUEUE|
| [/settings/NRPE/server](#/settings/NRPE/server) | [ssl options](#/settings/NRPE/server_ssl options) | VERIFY MODE|
| [/settings/NRPE/server](#/settings/NRPE/server) | [thread pool](#/settings/NRPE/server_thread pool) | THREAD POOL|
| [/settings/NRPE/server](#/settings/NRPE/server) | [timeout](#/settings/NRPE/server_timeout) | TIMEOUT|
| [/settings/NRPE/server](#/settings/NRPE/server) | [verify mode](#/settings/NRPE/server_verify mode) | VERIFY MODE|






# Configuration



## /settings/default

`/settings/default`






| Key | Default Value | Description|
| --- | ------------- | -----------|
| [allowed hosts](#/settings/default_allowed hosts) | 127.0.0.1 | ALLOWED HOSTS|
| [bind to](#/settings/default_bind to) |  | BIND TO ADDRESS|
| [cache allowed hosts](#/settings/default_cache allowed hosts) | 1 | CACHE ALLOWED HOSTS|
| [encoding](#/settings/default_encoding) |  | NRPE PAYLOAD ENCODING|
| [inbox](#/settings/default_inbox) | inbox | INBOX|
| [password](#/settings/default_password) |  | PASSWORD|
| [socket queue size](#/settings/default_socket queue size) | 0 | LISTEN QUEUE|
| [thread pool](#/settings/default_thread pool) | 10 | THREAD POOL|
| [timeout](#/settings/default_timeout) | 30 | TIMEOUT|


**Sample**::

```
# 
# 
[/settings/default]
allowed hosts=127.0.0.1
bind to=
cache allowed hosts=1
encoding=
inbox=inbox
password=
socket queue size=0
thread pool=10
timeout=30

```


<a name="/settings/default_allowed hosts"/>
### allowed hosts

**ALLOWED HOSTS**

A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges.

**Path**: /settings/default

**Key**: allowed hosts

**Default value**: 127.0.0.1

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# ALLOWED HOSTS
allowed hosts=127.0.0.1
```


<a name="/settings/default_bind to"/>
### bind to

**BIND TO ADDRESS**

Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses.

**Path**: /settings/default

**Key**: bind to

**Default value**: 

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# BIND TO ADDRESS
bind to=
```


<a name="/settings/default_cache allowed hosts"/>
### cache allowed hosts

**CACHE ALLOWED HOSTS**

If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server.

**Path**: /settings/default

**Key**: cache allowed hosts

**Default value**: 1

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# CACHE ALLOWED HOSTS
cache allowed hosts=1
```


<a name="/settings/default_encoding"/>
### encoding

**NRPE PAYLOAD ENCODING**



**Advanced** (means it is not commonly used)

**Path**: /settings/default

**Key**: encoding

**Default value**: 

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# NRPE PAYLOAD ENCODING
encoding=
```


<a name="/settings/default_inbox"/>
### inbox

**INBOX**

The default channel to post incoming messages on

**Path**: /settings/default

**Key**: inbox

**Default value**: inbox

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# INBOX
inbox=inbox
```


<a name="/settings/default_password"/>
### password

**PASSWORD**

Password used to authenticate against server

**Path**: /settings/default

**Key**: password

**Default value**: 

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# PASSWORD
password=
```


<a name="/settings/default_socket queue size"/>
### socket queue size

**LISTEN QUEUE**

Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts.

**Advanced** (means it is not commonly used)

**Path**: /settings/default

**Key**: socket queue size

**Default value**: 0

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# LISTEN QUEUE
socket queue size=0
```


<a name="/settings/default_thread pool"/>
### thread pool

**THREAD POOL**



**Advanced** (means it is not commonly used)

**Path**: /settings/default

**Key**: thread pool

**Default value**: 10

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# THREAD POOL
thread pool=10
```


<a name="/settings/default_timeout"/>
### timeout

**TIMEOUT**

Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out.

**Path**: /settings/default

**Key**: timeout

**Default value**: 30

**Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

**Sample**::

```
[/settings/default]
# TIMEOUT
timeout=30
```




## /settings/NRPE/server

`/settings/NRPE/server`

**NRPE SERVER SECTION**

Section for NRPE (NRPEServer.dll) (check_nrpe) protocol options.


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [allow arguments](#/settings/NRPE/server_allow arguments) | 0 | COMMAND ARGUMENT PROCESSING|
| [allow nasty characters](#/settings/NRPE/server_allow nasty characters) | 0 | COMMAND ALLOW NASTY META CHARS|
| [allowed ciphers](#/settings/NRPE/server_allowed ciphers) | ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH | ALLOWED CIPHERS|
| [allowed hosts](#/settings/NRPE/server_allowed hosts) | 127.0.0.1 | ALLOWED HOSTS|
| [bind to](#/settings/NRPE/server_bind to) |  | BIND TO ADDRESS|
| [ca](#/settings/NRPE/server_ca) | ${certificate-path}/ca.pem | CA|
| [cache allowed hosts](#/settings/NRPE/server_cache allowed hosts) | 1 | CACHE ALLOWED HOSTS|
| [certificate](#/settings/NRPE/server_certificate) | ${certificate-path}/certificate.pem | SSL CERTIFICATE|
| [certificate format](#/settings/NRPE/server_certificate format) | PEM | CERTIFICATE FORMAT|
| [certificate key](#/settings/NRPE/server_certificate key) |  | SSL CERTIFICATE|
| [dh](#/settings/NRPE/server_dh) | ${certificate-path}/nrpe_dh_512.pem | DH KEY|
| [encoding](#/settings/NRPE/server_encoding) |  | NRPE PAYLOAD ENCODING|
| [extended response](#/settings/NRPE/server_extended response) | 1 | EXTENDED RESPONSE|
| [insecure](#/settings/NRPE/server_insecure) | 0 | ALLOW INSECURE CHIPHERS and ENCRYPTION|
| [payload length](#/settings/NRPE/server_payload length) | 1024 | PAYLOAD LENGTH|
| [performance data](#/settings/NRPE/server_performance data) | 1 | PERFORMANCE DATA|
| [port](#/settings/NRPE/server_port) | 5666 | PORT NUMBER|
| [socket queue size](#/settings/NRPE/server_socket queue size) | 0 | LISTEN QUEUE|
| [ssl options](#/settings/NRPE/server_ssl options) |  | VERIFY MODE|
| [thread pool](#/settings/NRPE/server_thread pool) | 10 | THREAD POOL|
| [timeout](#/settings/NRPE/server_timeout) | 30 | TIMEOUT|
| [use ssl](#/settings/NRPE/server_use ssl) | 1 | ENABLE SSL ENCRYPTION|
| [verify mode](#/settings/NRPE/server_verify mode) | none | VERIFY MODE|


**Sample**::

```
# NRPE SERVER SECTION
# Section for NRPE (NRPEServer.dll) (check_nrpe) protocol options.
[/settings/NRPE/server]
allow arguments=0
allow nasty characters=0
allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
allowed hosts=127.0.0.1
bind to=
ca=${certificate-path}/ca.pem
cache allowed hosts=1
certificate=${certificate-path}/certificate.pem
certificate format=PEM
certificate key=
dh=${certificate-path}/nrpe_dh_512.pem
encoding=
extended response=1
insecure=0
payload length=1024
performance data=1
port=5666
socket queue size=0
ssl options=
thread pool=10
timeout=30
use ssl=1
verify mode=none

```


<a name="/settings/NRPE/server_allow arguments"/>
### allow arguments

**COMMAND ARGUMENT PROCESSING**

This option determines whether or not the we will allow clients to specify arguments to commands that are executed.

**Path**: /settings/NRPE/server

**Key**: allow arguments

**Default value**: 0

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# COMMAND ARGUMENT PROCESSING
allow arguments=0
```


<a name="/settings/NRPE/server_allow nasty characters"/>
### allow nasty characters

**COMMAND ALLOW NASTY META CHARS**

This option determines whether or not the we will allow clients to specify nasty (as in \|\`&><'"\\[]{}) characters in arguments.

**Path**: /settings/NRPE/server

**Key**: allow nasty characters

**Default value**: 0

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# COMMAND ALLOW NASTY META CHARS
allow nasty characters=0
```


<a name="/settings/NRPE/server_allowed ciphers"/>
### allowed ciphers

**ALLOWED CIPHERS**

The chipers which are allowed to be used.
The default here will differ is used in "insecure" mode or not. check_nrpe uses a very old chipers and should preferably not be used. For details of chipers please see the OPEN ssl documentation: https://www.openssl.org/docs/apps/ciphers.html

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: allowed ciphers

**Default value**: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# ALLOWED CIPHERS
allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
```


<a name="/settings/NRPE/server_allowed hosts"/>
### allowed hosts

**ALLOWED HOSTS**

A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: allowed hosts

**Default value**: 127.0.0.1

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# ALLOWED HOSTS
allowed hosts=127.0.0.1
```


<a name="/settings/NRPE/server_bind to"/>
### bind to

**BIND TO ADDRESS**

Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: bind to

**Default value**: 

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# BIND TO ADDRESS
bind to=
```


<a name="/settings/NRPE/server_ca"/>
### ca

**CA**



**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: ca

**Default value**: ${certificate-path}/ca.pem

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# CA
ca=${certificate-path}/ca.pem
```


<a name="/settings/NRPE/server_cache allowed hosts"/>
### cache allowed hosts

**CACHE ALLOWED HOSTS**

If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: cache allowed hosts

**Default value**: 1

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# CACHE ALLOWED HOSTS
cache allowed hosts=1
```


<a name="/settings/NRPE/server_certificate"/>
### certificate

**SSL CERTIFICATE**



**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: certificate

**Default value**: ${certificate-path}/certificate.pem

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# SSL CERTIFICATE
certificate=${certificate-path}/certificate.pem
```


<a name="/settings/NRPE/server_certificate format"/>
### certificate format

**CERTIFICATE FORMAT**



**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: certificate format

**Default value**: PEM

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# CERTIFICATE FORMAT
certificate format=PEM
```


<a name="/settings/NRPE/server_certificate key"/>
### certificate key

**SSL CERTIFICATE**



**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: certificate key

**Default value**: 

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# SSL CERTIFICATE
certificate key=
```


<a name="/settings/NRPE/server_dh"/>
### dh

**DH KEY**



**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: dh

**Default value**: ${certificate-path}/nrpe_dh_512.pem

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# DH KEY
dh=${certificate-path}/nrpe_dh_512.pem
```


<a name="/settings/NRPE/server_encoding"/>
### encoding

**NRPE PAYLOAD ENCODING**

 parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: encoding

**Default value**: 

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# NRPE PAYLOAD ENCODING
encoding=
```


<a name="/settings/NRPE/server_extended response"/>
### extended response

**EXTENDED RESPONSE**

Send more then 1 return packet to allow response to go beyond payload size (requires modified client if legacy is true this defaults to false).

**Path**: /settings/NRPE/server

**Key**: extended response

**Default value**: 1

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# EXTENDED RESPONSE
extended response=1
```


<a name="/settings/NRPE/server_insecure"/>
### insecure

**ALLOW INSECURE CHIPHERS and ENCRYPTION**

Only enable this if you are using legacy check_nrpe client.

**Path**: /settings/NRPE/server

**Key**: insecure

**Default value**: 0

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# ALLOW INSECURE CHIPHERS and ENCRYPTION
insecure=0
```


<a name="/settings/NRPE/server_payload length"/>
### payload length

**PAYLOAD LENGTH**

Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: payload length

**Default value**: 1024

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# PAYLOAD LENGTH
payload length=1024
```


<a name="/settings/NRPE/server_performance data"/>
### performance data

**PERFORMANCE DATA**

Send performance data back to nagios (set this to 0 to remove all performance data).

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: performance data

**Default value**: 1

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# PERFORMANCE DATA
performance data=1
```


<a name="/settings/NRPE/server_port"/>
### port

**PORT NUMBER**

Port to use for NRPE.

**Path**: /settings/NRPE/server

**Key**: port

**Default value**: 5666

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# PORT NUMBER
port=5666
```


<a name="/settings/NRPE/server_socket queue size"/>
### socket queue size

**LISTEN QUEUE**

Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: socket queue size

**Default value**: 0

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# LISTEN QUEUE
socket queue size=0
```


<a name="/settings/NRPE/server_ssl options"/>
### ssl options

**VERIFY MODE**

Comma separated list of verification flags to set on the SSL socket.

| default-workarounds  | Various workarounds for what I understand to be broken ssl implementations                                                                                                                                                           | |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | |
| no-sslv2             | Do not use the SSLv2 protocol.                                                                                                                                                                                                       | |
| no-sslv3             | Do not use the SSLv3 protocol.                                                                                                                                                                                                       | |
| no-tlsv1             | Do not use the TLSv1 protocol.                                                                                                                                                                                                       | |
| single-dh-use        | Always create a new key when using temporary/ephemeral DH parameters. This option must be used to prevent small subgroup attacks, when the DH parameters were not generated using "strong" primes (e.g. when using DSA-parameters).  | |







**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: ssl options

**Default value**: 

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# VERIFY MODE
ssl options=
```


<a name="/settings/NRPE/server_thread pool"/>
### thread pool

**THREAD POOL**

 parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: thread pool

**Default value**: 10

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# THREAD POOL
thread pool=10
```


<a name="/settings/NRPE/server_timeout"/>
### timeout

**TIMEOUT**

Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: timeout

**Default value**: 30

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# TIMEOUT
timeout=30
```


<a name="/settings/NRPE/server_use ssl"/>
### use ssl

**ENABLE SSL ENCRYPTION**

This option controls if SSL should be enabled.

**Path**: /settings/NRPE/server

**Key**: use ssl

**Default value**: 1

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# ENABLE SSL ENCRYPTION
use ssl=1
```


<a name="/settings/NRPE/server_verify mode"/>
### verify mode

**VERIFY MODE**

Comma separated list of verification flags to set on the SSL socket.

| none             | The server will not send a client certificate request to the client, so the client will not send a certificate.                          | |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | |
| peer             | The server sends a client certificate request to the client and the certificate returned (if any) is checked.                            | |
| fail-if-no-cert  | if the client did not return a certificate, the TLS/SSL handshake is immediately terminated. This flag must be used together with peer.  | |
| peer-cert        | Alias for peer and fail-if-no-cert.                                                                                                      | |
| workarounds      | Various bug workarounds.                                                                                                                 | |
| single           | Always create a new key when using tmp_dh parameters.                                                                                    | |
| client-once      | Only request a client certificate on the initial TLS/SSL handshake. This flag must be used together with verify-peer                     | |







**Advanced** (means it is not commonly used)

**Path**: /settings/NRPE/server

**Key**: verify mode

**Default value**: none

**Used by**: :module:`NRPEServer`

**Sample**::

```
[/settings/NRPE/server]
# VERIFY MODE
verify mode=none
```


