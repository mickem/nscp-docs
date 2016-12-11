# NSClientServer

A server that listens for incoming check_nt connection and processes incoming requests.





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
| [/settings/NSClient/server](#/settings/NSClient/server) | [performance data](#/settings/NSClient/server_performance data) | PERFORMANCE DATA|
| [/settings/NSClient/server](#/settings/NSClient/server) | [port](#/settings/NSClient/server_port) | PORT NUMBER|
| [/settings/NSClient/server](#/settings/NSClient/server) | [use ssl](#/settings/NSClient/server_use ssl) | ENABLE SSL ENCRYPTION|

Advanced keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/default](#/settings/default) | [encoding](#/settings/default_encoding) | NRPE PAYLOAD ENCODING|
| [/settings/default](#/settings/default) | [socket queue size](#/settings/default_socket queue size) | LISTEN QUEUE|
| [/settings/default](#/settings/default) | [thread pool](#/settings/default_thread pool) | THREAD POOL|
| [/settings/NSClient/server](#/settings/NSClient/server) | [allowed ciphers](#/settings/NSClient/server_allowed ciphers) | ALLOWED CIPHERS|
| [/settings/NSClient/server](#/settings/NSClient/server) | [allowed hosts](#/settings/NSClient/server_allowed hosts) | ALLOWED HOSTS|
| [/settings/NSClient/server](#/settings/NSClient/server) | [bind to](#/settings/NSClient/server_bind to) | BIND TO ADDRESS|
| [/settings/NSClient/server](#/settings/NSClient/server) | [ca](#/settings/NSClient/server_ca) | CA|
| [/settings/NSClient/server](#/settings/NSClient/server) | [cache allowed hosts](#/settings/NSClient/server_cache allowed hosts) | CACHE ALLOWED HOSTS|
| [/settings/NSClient/server](#/settings/NSClient/server) | [certificate](#/settings/NSClient/server_certificate) | SSL CERTIFICATE|
| [/settings/NSClient/server](#/settings/NSClient/server) | [certificate format](#/settings/NSClient/server_certificate format) | CERTIFICATE FORMAT|
| [/settings/NSClient/server](#/settings/NSClient/server) | [certificate key](#/settings/NSClient/server_certificate key) | SSL CERTIFICATE|
| [/settings/NSClient/server](#/settings/NSClient/server) | [dh](#/settings/NSClient/server_dh) | DH KEY|
| [/settings/NSClient/server](#/settings/NSClient/server) | [password](#/settings/NSClient/server_password) | PASSWORD|
| [/settings/NSClient/server](#/settings/NSClient/server) | [socket queue size](#/settings/NSClient/server_socket queue size) | LISTEN QUEUE|
| [/settings/NSClient/server](#/settings/NSClient/server) | [ssl options](#/settings/NSClient/server_ssl options) | VERIFY MODE|
| [/settings/NSClient/server](#/settings/NSClient/server) | [thread pool](#/settings/NSClient/server_thread pool) | THREAD POOL|
| [/settings/NSClient/server](#/settings/NSClient/server) | [timeout](#/settings/NSClient/server_timeout) | TIMEOUT|
| [/settings/NSClient/server](#/settings/NSClient/server) | [verify mode](#/settings/NSClient/server_verify mode) | VERIFY MODE|






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




## /settings/NSClient/server

`/settings/NSClient/server`

**NSCLIENT SERVER SECTION**

Section for NSClient (NSClientServer.dll) (check_nt) protocol options.


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [allowed ciphers](#/settings/NSClient/server_allowed ciphers) | ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH | ALLOWED CIPHERS|
| [allowed hosts](#/settings/NSClient/server_allowed hosts) | 127.0.0.1 | ALLOWED HOSTS|
| [bind to](#/settings/NSClient/server_bind to) |  | BIND TO ADDRESS|
| [ca](#/settings/NSClient/server_ca) | ${certificate-path}/ca.pem | CA|
| [cache allowed hosts](#/settings/NSClient/server_cache allowed hosts) | 1 | CACHE ALLOWED HOSTS|
| [certificate](#/settings/NSClient/server_certificate) | ${certificate-path}/certificate.pem | SSL CERTIFICATE|
| [certificate format](#/settings/NSClient/server_certificate format) | PEM | CERTIFICATE FORMAT|
| [certificate key](#/settings/NSClient/server_certificate key) |  | SSL CERTIFICATE|
| [dh](#/settings/NSClient/server_dh) | ${certificate-path}/nrpe_dh_512.pem | DH KEY|
| [password](#/settings/NSClient/server_password) |  | PASSWORD|
| [performance data](#/settings/NSClient/server_performance data) | 1 | PERFORMANCE DATA|
| [port](#/settings/NSClient/server_port) | 12489 | PORT NUMBER|
| [socket queue size](#/settings/NSClient/server_socket queue size) | 0 | LISTEN QUEUE|
| [ssl options](#/settings/NSClient/server_ssl options) |  | VERIFY MODE|
| [thread pool](#/settings/NSClient/server_thread pool) | 10 | THREAD POOL|
| [timeout](#/settings/NSClient/server_timeout) | 30 | TIMEOUT|
| [use ssl](#/settings/NSClient/server_use ssl) | 0 | ENABLE SSL ENCRYPTION|
| [verify mode](#/settings/NSClient/server_verify mode) | none | VERIFY MODE|


**Sample**::

```
# NSCLIENT SERVER SECTION
# Section for NSClient (NSClientServer.dll) (check_nt) protocol options.
[/settings/NSClient/server]
allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
allowed hosts=127.0.0.1
bind to=
ca=${certificate-path}/ca.pem
cache allowed hosts=1
certificate=${certificate-path}/certificate.pem
certificate format=PEM
certificate key=
dh=${certificate-path}/nrpe_dh_512.pem
password=
performance data=1
port=12489
socket queue size=0
ssl options=
thread pool=10
timeout=30
use ssl=0
verify mode=none

```


<a name="/settings/NSClient/server_allowed ciphers"/>
### allowed ciphers

**ALLOWED CIPHERS**

The chipers which are allowed to be used.
The default here will differ is used in "insecure" mode or not. check_nrpe uses a very old chipers and should preferably not be used. For details of chipers please see the OPEN ssl documentation: https://www.openssl.org/docs/apps/ciphers.html

**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: allowed ciphers

**Default value**: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# ALLOWED CIPHERS
allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
```


<a name="/settings/NSClient/server_allowed hosts"/>
### allowed hosts

**ALLOWED HOSTS**

A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: allowed hosts

**Default value**: 127.0.0.1

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# ALLOWED HOSTS
allowed hosts=127.0.0.1
```


<a name="/settings/NSClient/server_bind to"/>
### bind to

**BIND TO ADDRESS**

Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: bind to

**Default value**: 

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# BIND TO ADDRESS
bind to=
```


<a name="/settings/NSClient/server_ca"/>
### ca

**CA**



**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: ca

**Default value**: ${certificate-path}/ca.pem

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# CA
ca=${certificate-path}/ca.pem
```


<a name="/settings/NSClient/server_cache allowed hosts"/>
### cache allowed hosts

**CACHE ALLOWED HOSTS**

If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: cache allowed hosts

**Default value**: 1

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# CACHE ALLOWED HOSTS
cache allowed hosts=1
```


<a name="/settings/NSClient/server_certificate"/>
### certificate

**SSL CERTIFICATE**



**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: certificate

**Default value**: ${certificate-path}/certificate.pem

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# SSL CERTIFICATE
certificate=${certificate-path}/certificate.pem
```


<a name="/settings/NSClient/server_certificate format"/>
### certificate format

**CERTIFICATE FORMAT**



**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: certificate format

**Default value**: PEM

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# CERTIFICATE FORMAT
certificate format=PEM
```


<a name="/settings/NSClient/server_certificate key"/>
### certificate key

**SSL CERTIFICATE**



**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: certificate key

**Default value**: 

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# SSL CERTIFICATE
certificate key=
```


<a name="/settings/NSClient/server_dh"/>
### dh

**DH KEY**



**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: dh

**Default value**: ${certificate-path}/nrpe_dh_512.pem

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# DH KEY
dh=${certificate-path}/nrpe_dh_512.pem
```


<a name="/settings/NSClient/server_password"/>
### password

**PASSWORD**

Password used to authenticate against server parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: password

**Default value**: 

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# PASSWORD
password=
```


<a name="/settings/NSClient/server_performance data"/>
### performance data

**PERFORMANCE DATA**

Send performance data back to Nagios (set this to 0 to remove all performance data).

**Path**: /settings/NSClient/server

**Key**: performance data

**Default value**: 1

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# PERFORMANCE DATA
performance data=1
```


<a name="/settings/NSClient/server_port"/>
### port

**PORT NUMBER**

Port to use for check_nt.

**Path**: /settings/NSClient/server

**Key**: port

**Default value**: 12489

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# PORT NUMBER
port=12489
```


<a name="/settings/NSClient/server_socket queue size"/>
### socket queue size

**LISTEN QUEUE**

Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: socket queue size

**Default value**: 0

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# LISTEN QUEUE
socket queue size=0
```


<a name="/settings/NSClient/server_ssl options"/>
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

**Path**: /settings/NSClient/server

**Key**: ssl options

**Default value**: 

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# VERIFY MODE
ssl options=
```


<a name="/settings/NSClient/server_thread pool"/>
### thread pool

**THREAD POOL**

 parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: thread pool

**Default value**: 10

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# THREAD POOL
thread pool=10
```


<a name="/settings/NSClient/server_timeout"/>
### timeout

**TIMEOUT**

Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

**Advanced** (means it is not commonly used)

**Path**: /settings/NSClient/server

**Key**: timeout

**Default value**: 30

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# TIMEOUT
timeout=30
```


<a name="/settings/NSClient/server_use ssl"/>
### use ssl

**ENABLE SSL ENCRYPTION**

This option controls if SSL should be enabled.

**Path**: /settings/NSClient/server

**Key**: use ssl

**Default value**: 0

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# ENABLE SSL ENCRYPTION
use ssl=0
```


<a name="/settings/NSClient/server_verify mode"/>
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

**Path**: /settings/NSClient/server

**Key**: verify mode

**Default value**: none

**Used by**: :module:`NSClientServer`

**Sample**::

```
[/settings/NSClient/server]
# VERIFY MODE
verify mode=none
```


