# CheckMKServer

A server that listens for incoming check_mk connection and processes incoming requests.





## Command list

**TODO:** Add a list of all external commands (this is not check commands)

## Configuration list


Common Keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/check_mk/server](#/settings/check_mk/server) | [port](#/settings/check_mk/server_port) | PORT NUMBER|
| [/settings/check_mk/server](#/settings/check_mk/server) | [use ssl](#/settings/check_mk/server_use ssl) | ENABLE SSL ENCRYPTION|
| [/settings/default](#/settings/default) | [allowed hosts](#/settings/default_allowed hosts) | ALLOWED HOSTS|
| [/settings/default](#/settings/default) | [bind to](#/settings/default_bind to) | BIND TO ADDRESS|
| [/settings/default](#/settings/default) | [cache allowed hosts](#/settings/default_cache allowed hosts) | CACHE ALLOWED HOSTS|
| [/settings/default](#/settings/default) | [inbox](#/settings/default_inbox) | INBOX|
| [/settings/default](#/settings/default) | [password](#/settings/default_password) | PASSWORD|
| [/settings/default](#/settings/default) | [timeout](#/settings/default_timeout) | TIMEOUT|

Advanced keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/check_mk/server](#/settings/check_mk/server) | [allowed ciphers](#/settings/check_mk/server_allowed ciphers) | ALLOWED CIPHERS|
| [/settings/check_mk/server](#/settings/check_mk/server) | [allowed hosts](#/settings/check_mk/server_allowed hosts) | ALLOWED HOSTS|
| [/settings/check_mk/server](#/settings/check_mk/server) | [bind to](#/settings/check_mk/server_bind to) | BIND TO ADDRESS|
| [/settings/check_mk/server](#/settings/check_mk/server) | [ca](#/settings/check_mk/server_ca) | CA|
| [/settings/check_mk/server](#/settings/check_mk/server) | [cache allowed hosts](#/settings/check_mk/server_cache allowed hosts) | CACHE ALLOWED HOSTS|
| [/settings/check_mk/server](#/settings/check_mk/server) | [certificate](#/settings/check_mk/server_certificate) | SSL CERTIFICATE|
| [/settings/check_mk/server](#/settings/check_mk/server) | [certificate format](#/settings/check_mk/server_certificate format) | CERTIFICATE FORMAT|
| [/settings/check_mk/server](#/settings/check_mk/server) | [certificate key](#/settings/check_mk/server_certificate key) | SSL CERTIFICATE|
| [/settings/check_mk/server](#/settings/check_mk/server) | [dh](#/settings/check_mk/server_dh) | DH KEY|
| [/settings/check_mk/server](#/settings/check_mk/server) | [socket queue size](#/settings/check_mk/server_socket queue size) | LISTEN QUEUE|
| [/settings/check_mk/server](#/settings/check_mk/server) | [ssl options](#/settings/check_mk/server_ssl options) | VERIFY MODE|
| [/settings/check_mk/server](#/settings/check_mk/server) | [thread pool](#/settings/check_mk/server_thread pool) | THREAD POOL|
| [/settings/check_mk/server](#/settings/check_mk/server) | [timeout](#/settings/check_mk/server_timeout) | TIMEOUT|
| [/settings/check_mk/server](#/settings/check_mk/server) | [verify mode](#/settings/check_mk/server_verify mode) | VERIFY MODE|
| [/settings/default](#/settings/default) | [encoding](#/settings/default_encoding) | NRPE PAYLOAD ENCODING|
| [/settings/default](#/settings/default) | [socket queue size](#/settings/default_socket queue size) | LISTEN QUEUE|
| [/settings/default](#/settings/default) | [thread pool](#/settings/default_thread pool) | THREAD POOL|






# Configuration



## /settings/check_mk/server

`/settings/check_mk/server`

**CHECK MK SERVER SECTION**

Section for check_mk (CheckMKServer.dll) protocol options.


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [allowed ciphers](#/settings/check_mk/server_allowed ciphers) | ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH | ALLOWED CIPHERS|
| [allowed hosts](#/settings/check_mk/server_allowed hosts) | 127.0.0.1 | ALLOWED HOSTS|
| [bind to](#/settings/check_mk/server_bind to) |  | BIND TO ADDRESS|
| [ca](#/settings/check_mk/server_ca) | ${certificate-path}/ca.pem | CA|
| [cache allowed hosts](#/settings/check_mk/server_cache allowed hosts) | 1 | CACHE ALLOWED HOSTS|
| [certificate](#/settings/check_mk/server_certificate) | ${certificate-path}/certificate.pem | SSL CERTIFICATE|
| [certificate format](#/settings/check_mk/server_certificate format) | PEM | CERTIFICATE FORMAT|
| [certificate key](#/settings/check_mk/server_certificate key) |  | SSL CERTIFICATE|
| [dh](#/settings/check_mk/server_dh) | ${certificate-path}/nrpe_dh_512.pem | DH KEY|
| [port](#/settings/check_mk/server_port) | 6556 | PORT NUMBER|
| [socket queue size](#/settings/check_mk/server_socket queue size) | 0 | LISTEN QUEUE|
| [ssl options](#/settings/check_mk/server_ssl options) |  | VERIFY MODE|
| [thread pool](#/settings/check_mk/server_thread pool) | 10 | THREAD POOL|
| [timeout](#/settings/check_mk/server_timeout) | 30 | TIMEOUT|
| [use ssl](#/settings/check_mk/server_use ssl) | 0 | ENABLE SSL ENCRYPTION|
| [verify mode](#/settings/check_mk/server_verify mode) | none | VERIFY MODE|


**Sample**::

```
# CHECK MK SERVER SECTION
# Section for check_mk (CheckMKServer.dll) protocol options.
[/settings/check_mk/server]
allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
allowed hosts=127.0.0.1
bind to=
ca=${certificate-path}/ca.pem
cache allowed hosts=1
certificate=${certificate-path}/certificate.pem
certificate format=PEM
certificate key=
dh=${certificate-path}/nrpe_dh_512.pem
port=6556
socket queue size=0
ssl options=
thread pool=10
timeout=30
use ssl=0
verify mode=none

```


<a name="/settings/check_mk/server_allowed ciphers"/>
### allowed ciphers

**ALLOWED CIPHERS**

The chipers which are allowed to be used.
The default here will differ is used in "insecure" mode or not. check_nrpe uses a very old chipers and should preferably not be used. For details of chipers please see the OPEN ssl documentation: https://www.openssl.org/docs/apps/ciphers.html

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: allowed ciphers

**Default value**: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# ALLOWED CIPHERS
allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
```


<a name="/settings/check_mk/server_allowed hosts"/>
### allowed hosts

**ALLOWED HOSTS**

A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: allowed hosts

**Default value**: 127.0.0.1

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# ALLOWED HOSTS
allowed hosts=127.0.0.1
```


<a name="/settings/check_mk/server_bind to"/>
### bind to

**BIND TO ADDRESS**

Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: bind to

**Default value**: 

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# BIND TO ADDRESS
bind to=
```


<a name="/settings/check_mk/server_ca"/>
### ca

**CA**



**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: ca

**Default value**: ${certificate-path}/ca.pem

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# CA
ca=${certificate-path}/ca.pem
```


<a name="/settings/check_mk/server_cache allowed hosts"/>
### cache allowed hosts

**CACHE ALLOWED HOSTS**

If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: cache allowed hosts

**Default value**: 1

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# CACHE ALLOWED HOSTS
cache allowed hosts=1
```


<a name="/settings/check_mk/server_certificate"/>
### certificate

**SSL CERTIFICATE**



**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: certificate

**Default value**: ${certificate-path}/certificate.pem

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# SSL CERTIFICATE
certificate=${certificate-path}/certificate.pem
```


<a name="/settings/check_mk/server_certificate format"/>
### certificate format

**CERTIFICATE FORMAT**



**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: certificate format

**Default value**: PEM

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# CERTIFICATE FORMAT
certificate format=PEM
```


<a name="/settings/check_mk/server_certificate key"/>
### certificate key

**SSL CERTIFICATE**



**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: certificate key

**Default value**: 

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# SSL CERTIFICATE
certificate key=
```


<a name="/settings/check_mk/server_dh"/>
### dh

**DH KEY**



**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: dh

**Default value**: ${certificate-path}/nrpe_dh_512.pem

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# DH KEY
dh=${certificate-path}/nrpe_dh_512.pem
```


<a name="/settings/check_mk/server_port"/>
### port

**PORT NUMBER**

Port to use for check_mk.

**Path**: /settings/check_mk/server

**Key**: port

**Default value**: 6556

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# PORT NUMBER
port=6556
```


<a name="/settings/check_mk/server_socket queue size"/>
### socket queue size

**LISTEN QUEUE**

Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: socket queue size

**Default value**: 0

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# LISTEN QUEUE
socket queue size=0
```


<a name="/settings/check_mk/server_ssl options"/>
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

**Path**: /settings/check_mk/server

**Key**: ssl options

**Default value**: 

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# VERIFY MODE
ssl options=
```


<a name="/settings/check_mk/server_thread pool"/>
### thread pool

**THREAD POOL**

 parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: thread pool

**Default value**: 10

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# THREAD POOL
thread pool=10
```


<a name="/settings/check_mk/server_timeout"/>
### timeout

**TIMEOUT**

Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/check_mk/server

**Key**: timeout

**Default value**: 30

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# TIMEOUT
timeout=30
```


<a name="/settings/check_mk/server_use ssl"/>
### use ssl

**ENABLE SSL ENCRYPTION**

This option controls if SSL should be enabled.

**Path**: /settings/check_mk/server

**Key**: use ssl

**Default value**: 0

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# ENABLE SSL ENCRYPTION
use ssl=0
```


<a name="/settings/check_mk/server_verify mode"/>
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

**Path**: /settings/check_mk/server

**Key**: verify mode

**Default value**: none

**Used by**: :module:`CheckMKServer`

**Sample**::

```
[/settings/check_mk/server]
# VERIFY MODE
verify mode=none
```




## /settings/check_mk/server/scripts

`/settings/check_mk/server/scripts`

**REMOTE TARGET DEFINITIONS**






**Sample**::

```
# REMOTE TARGET DEFINITIONS
# 
[/settings/check_mk/server/scripts]

```




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


