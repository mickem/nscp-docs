.. default-domain:: nscp

.. module:: NRPEServer
    :synopsis: A server that listens for incoming NRPE connection and processes incoming requests.

===================================
:module:`NRPEServer` --- NRPEServer
===================================
A server that listens for incoming NRPE connection and processes incoming requests.





**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/default` | :confkey:`~/settings/default.allowed hosts` | ALLOWED HOSTS
    :confpath:`/settings/default` | :confkey:`~/settings/default.bind to` | BIND TO ADDRESS
    :confpath:`/settings/default` | :confkey:`~/settings/default.cache allowed hosts` | CACHE ALLOWED HOSTS
    :confpath:`/settings/default` | :confkey:`~/settings/default.inbox` | INBOX
    :confpath:`/settings/default` | :confkey:`~/settings/default.password` | PASSWORD
    :confpath:`/settings/default` | :confkey:`~/settings/default.timeout` | TIMEOUT
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.allow arguments` | COMMAND ARGUMENT PROCESSING
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.allow nasty characters` | COMMAND ALLOW NASTY META CHARS
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.extended response` | EXTENDED RESPONSE
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.insecure` | ALLOW INSECURE CHIPHERS and ENCRYPTION
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.port` | PORT NUMBER
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.use ssl` | ENABLE SSL ENCRYPTION

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/default` | :confkey:`~/settings/default.encoding` | NRPE PAYLOAD ENCODING
    :confpath:`/settings/default` | :confkey:`~/settings/default.modern commands` | Register modern aliases for built-in commands
    :confpath:`/settings/default` | :confkey:`~/settings/default.socket queue size` | LISTEN QUEUE
    :confpath:`/settings/default` | :confkey:`~/settings/default.thread pool` | THREAD POOL
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.allowed hosts` | ALLOWED HOSTS
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.bind to` | BIND TO ADDRESS
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.ca` | CA
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.cache allowed hosts` | CACHE ALLOWED HOSTS
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.certificate` | SSL CERTIFICATE
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.dh` | DH KEY
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.encoding` | NRPE PAYLOAD ENCODING
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.payload length` | PAYLOAD LENGTH
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.performance data` | PERFORMANCE DATA
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.socket queue size` | LISTEN QUEUE
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.thread pool` | THREAD POOL
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.timeout` | TIMEOUT
    :confpath:`/settings/NRPE/server` | :confkey:`~/settings/NRPE/server.verify mode` | VERIFY MODE







… default
---------
.. confpath:: /settings/default
    :synopsis: 

    ****




.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`allowed hosts` | 127.0.0.1 | ALLOWED HOSTS
    :confkey:`bind to` |  | BIND TO ADDRESS
    :confkey:`cache allowed hosts` | 1 | CACHE ALLOWED HOSTS
    :confkey:`encoding` |  | NRPE PAYLOAD ENCODING
    :confkey:`inbox` | inbox | INBOX
    :confkey:`modern commands` | 1 | Register modern aliases for built-in commands
    :confkey:`password` |  | PASSWORD
    :confkey:`socket queue size` | 0 | LISTEN QUEUE
    :confkey:`thread pool` | 10 | THREAD POOL
    :confkey:`timeout` | 30 | TIMEOUT


**Sample**::

    # 
    # 
    [/settings/default]
    allowed hosts=127.0.0.1
    bind to=
    cache allowed hosts=1
    encoding=
    inbox=inbox
    modern commands=1
    password=
    socket queue size=0
    thread pool=10
    timeout=30


.. confkey:: allowed hosts
    :synopsis: ALLOWED HOSTS

    **ALLOWED HOSTS**

    | A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges.

    **Path**: /settings/default

    **Key**: allowed hosts

    **Default value**: 127.0.0.1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # ALLOWED HOSTS
        # A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges.
        [/settings/default]
        allowed hosts=127.0.0.1


.. confkey:: bind to
    :synopsis: BIND TO ADDRESS

    **BIND TO ADDRESS**

    | Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses.

    **Path**: /settings/default

    **Key**: bind to

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # BIND TO ADDRESS
        # Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses.
        [/settings/default]
        bind to=


.. confkey:: cache allowed hosts
    :synopsis: CACHE ALLOWED HOSTS

    **CACHE ALLOWED HOSTS**

    | If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server.

    **Path**: /settings/default

    **Key**: cache allowed hosts

    **Default value**: 1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # CACHE ALLOWED HOSTS
        # If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server.
        [/settings/default]
        cache allowed hosts=1


.. confkey:: encoding
    :synopsis: NRPE PAYLOAD ENCODING

    **NRPE PAYLOAD ENCODING**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: encoding

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # NRPE PAYLOAD ENCODING
        # 
        [/settings/default]
        encoding=


.. confkey:: inbox
    :synopsis: INBOX

    **INBOX**

    | The default channel to post incoming messages on

    **Path**: /settings/default

    **Key**: inbox

    **Default value**: inbox

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # INBOX
        # The default channel to post incoming messages on
        [/settings/default]
        inbox=inbox


.. confkey:: modern commands
    :synopsis: Register modern aliases for built-in commands

    **Register modern aliases for built-in commands**

    | Register modern alias for commands (ccheck_xxx as opposed of CheckXXX) these are the names which will be used in future version of NSClient++

    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: modern commands

    **Default value**: 1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # Register modern aliases for built-in commands
        # Register modern alias for commands (ccheck_xxx as opposed of CheckXXX) these are the names which will be used in future version of NSClient++
        [/settings/default]
        modern commands=1


.. confkey:: password
    :synopsis: PASSWORD

    **PASSWORD**

    | Password to use

    **Path**: /settings/default

    **Key**: password

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # PASSWORD
        # Password to use
        [/settings/default]
        password=


.. confkey:: socket queue size
    :synopsis: LISTEN QUEUE

    **LISTEN QUEUE**

    | Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: socket queue size

    **Default value**: 0

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # LISTEN QUEUE
        # Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts.
        [/settings/default]
        socket queue size=0


.. confkey:: thread pool
    :synopsis: THREAD POOL

    **THREAD POOL**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: thread pool

    **Default value**: 10

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # THREAD POOL
        # 
        [/settings/default]
        thread pool=10


.. confkey:: timeout
    :synopsis: TIMEOUT

    **TIMEOUT**

    | Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out.

    **Path**: /settings/default

    **Key**: timeout

    **Default value**: 30

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # TIMEOUT
        # Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out.
        [/settings/default]
        timeout=30




… NRPE / server
---------------
.. confpath:: /settings/NRPE/server
    :synopsis: NRPE SERVER SECTION

    **NRPE SERVER SECTION**

    | Section for NRPE (NRPEServer.dll) (check_nrpe) protocol options.


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`allow arguments` | 0 | COMMAND ARGUMENT PROCESSING
    :confkey:`allow nasty characters` | 0 | COMMAND ALLOW NASTY META CHARS
    :confkey:`allowed ciphers` | ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH | ALLOWED CIPHERS
    :confkey:`allowed hosts` | 127.0.0.1 | ALLOWED HOSTS
    :confkey:`bind to` |  | BIND TO ADDRESS
    :confkey:`ca` | ${certificate-path}/ca.pem | CA
    :confkey:`cache allowed hosts` | 1 | CACHE ALLOWED HOSTS
    :confkey:`certificate` | ${certificate-path}/certificate.pem | SSL CERTIFICATE
    :confkey:`certificate format` | PEM | CERTIFICATE FORMAT
    :confkey:`certificate key` | ${certificate-path}/certificate_key.pem | SSL CERTIFICATE
    :confkey:`dh` | ${certificate-path}/nrpe_dh_512.pem | DH KEY
    :confkey:`encoding` |  | NRPE PAYLOAD ENCODING
    :confkey:`extended response` | 1 | EXTENDED RESPONSE
    :confkey:`insecure` | 0 | ALLOW INSECURE CHIPHERS and ENCRYPTION
    :confkey:`payload length` | 1024 | PAYLOAD LENGTH
    :confkey:`performance data` | 1 | PERFORMANCE DATA
    :confkey:`port` | 5666 | PORT NUMBER
    :confkey:`socket queue size` | 0 | LISTEN QUEUE
    :confkey:`thread pool` | 10 | THREAD POOL
    :confkey:`timeout` | 30 | TIMEOUT
    :confkey:`use ssl` | 1 | ENABLE SSL ENCRYPTION
    :confkey:`verify mode` | none | VERIFY MODE


**Sample**::

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
    certificate key=${certificate-path}/certificate_key.pem
    dh=${certificate-path}/nrpe_dh_512.pem
    encoding=
    extended response=1
    insecure=0
    payload length=1024
    performance data=1
    port=5666
    socket queue size=0
    thread pool=10
    timeout=30
    use ssl=1
    verify mode=none


.. confkey:: allow arguments
    :synopsis: COMMAND ARGUMENT PROCESSING

    **COMMAND ARGUMENT PROCESSING**

    | This option determines whether or not the we will allow clients to specify arguments to commands that are executed.

    **Path**: /settings/NRPE/server

    **Key**: allow arguments

    **Default value**: 0

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # COMMAND ARGUMENT PROCESSING
        # This option determines whether or not the we will allow clients to specify arguments to commands that are executed.
        [/settings/NRPE/server]
        allow arguments=0


.. confkey:: allow nasty characters
    :synopsis: COMMAND ALLOW NASTY META CHARS

    **COMMAND ALLOW NASTY META CHARS**

    | This option determines whether or not the we will allow clients to specify nasty (as in |`&><'"\[]{}) characters in arguments.

    **Path**: /settings/NRPE/server

    **Key**: allow nasty characters

    **Default value**: 0

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # COMMAND ALLOW NASTY META CHARS
        # This option determines whether or not the we will allow clients to specify nasty (as in |`&><'"\[]{}) characters in arguments.
        [/settings/NRPE/server]
        allow nasty characters=0


.. confkey:: allowed ciphers
    :synopsis: ALLOWED CIPHERS

    **ALLOWED CIPHERS**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: allowed ciphers

    **Default value**: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # ALLOWED CIPHERS
        # 
        [/settings/NRPE/server]
        allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH


.. confkey:: allowed hosts
    :synopsis: ALLOWED HOSTS

    **ALLOWED HOSTS**

    | A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: allowed hosts

    **Default value**: 127.0.0.1

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # ALLOWED HOSTS
        # A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NRPE/server]
        allowed hosts=127.0.0.1


.. confkey:: bind to
    :synopsis: BIND TO ADDRESS

    **BIND TO ADDRESS**

    | Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: bind to

    **Default value**: 

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # BIND TO ADDRESS
        # Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NRPE/server]
        bind to=


.. confkey:: ca
    :synopsis: CA

    **CA**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: ca

    **Default value**: ${certificate-path}/ca.pem

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # CA
        # 
        [/settings/NRPE/server]
        ca=${certificate-path}/ca.pem


.. confkey:: cache allowed hosts
    :synopsis: CACHE ALLOWED HOSTS

    **CACHE ALLOWED HOSTS**

    | If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: cache allowed hosts

    **Default value**: 1

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # CACHE ALLOWED HOSTS
        # If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NRPE/server]
        cache allowed hosts=1


.. confkey:: certificate
    :synopsis: SSL CERTIFICATE

    **SSL CERTIFICATE**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: certificate

    **Default value**: ${certificate-path}/certificate.pem

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # SSL CERTIFICATE
        # 
        [/settings/NRPE/server]
        certificate=${certificate-path}/certificate.pem


.. confkey:: certificate format
    :synopsis: CERTIFICATE FORMAT

    **CERTIFICATE FORMAT**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: certificate format

    **Default value**: PEM

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # CERTIFICATE FORMAT
        # 
        [/settings/NRPE/server]
        certificate format=PEM


.. confkey:: certificate key
    :synopsis: SSL CERTIFICATE

    **SSL CERTIFICATE**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: certificate key

    **Default value**: ${certificate-path}/certificate_key.pem

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # SSL CERTIFICATE
        # 
        [/settings/NRPE/server]
        certificate key=${certificate-path}/certificate_key.pem


.. confkey:: dh
    :synopsis: DH KEY

    **DH KEY**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: dh

    **Default value**: ${certificate-path}/nrpe_dh_512.pem

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # DH KEY
        # 
        [/settings/NRPE/server]
        dh=${certificate-path}/nrpe_dh_512.pem


.. confkey:: encoding
    :synopsis: NRPE PAYLOAD ENCODING

    **NRPE PAYLOAD ENCODING**

    | parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: encoding

    **Default value**: 

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # NRPE PAYLOAD ENCODING
        # parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NRPE/server]
        encoding=


.. confkey:: extended response
    :synopsis: EXTENDED RESPONSE

    **EXTENDED RESPONSE**

    | Send more then 1 return packet to allow response to go beyond payload size (requires modified client).

    **Path**: /settings/NRPE/server

    **Key**: extended response

    **Default value**: 1

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # EXTENDED RESPONSE
        # Send more then 1 return packet to allow response to go beyond payload size (requires modified client).
        [/settings/NRPE/server]
        extended response=1


.. confkey:: insecure
    :synopsis: ALLOW INSECURE CHIPHERS and ENCRYPTION

    **ALLOW INSECURE CHIPHERS and ENCRYPTION**

    | Only enable this if you are using legacy check_nrpe client.

    **Path**: /settings/NRPE/server

    **Key**: insecure

    **Default value**: 0

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # ALLOW INSECURE CHIPHERS and ENCRYPTION
        # Only enable this if you are using legacy check_nrpe client.
        [/settings/NRPE/server]
        insecure=0


.. confkey:: payload length
    :synopsis: PAYLOAD LENGTH

    **PAYLOAD LENGTH**

    | Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: payload length

    **Default value**: 1024

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # PAYLOAD LENGTH
        # Length of payload to/from the NRPE agent. This is a hard specific value so you have to "configure" (read recompile) your NRPE agent to use the same value for it to work.
        [/settings/NRPE/server]
        payload length=1024


.. confkey:: performance data
    :synopsis: PERFORMANCE DATA

    **PERFORMANCE DATA**

    | Send performance data back to nagios (set this to 0 to remove all performance data).

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: performance data

    **Default value**: 1

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # PERFORMANCE DATA
        # Send performance data back to nagios (set this to 0 to remove all performance data).
        [/settings/NRPE/server]
        performance data=1


.. confkey:: port
    :synopsis: PORT NUMBER

    **PORT NUMBER**

    | Port to use for NRPE.

    **Path**: /settings/NRPE/server

    **Key**: port

    **Default value**: 5666

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # PORT NUMBER
        # Port to use for NRPE.
        [/settings/NRPE/server]
        port=5666


.. confkey:: socket queue size
    :synopsis: LISTEN QUEUE

    **LISTEN QUEUE**

    | Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: socket queue size

    **Default value**: 0

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # LISTEN QUEUE
        # Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NRPE/server]
        socket queue size=0


.. confkey:: thread pool
    :synopsis: THREAD POOL

    **THREAD POOL**

    | parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: thread pool

    **Default value**: 10

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # THREAD POOL
        # parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NRPE/server]
        thread pool=10


.. confkey:: timeout
    :synopsis: TIMEOUT

    **TIMEOUT**

    | Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: timeout

    **Default value**: 30

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # TIMEOUT
        # Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/NRPE/server]
        timeout=30


.. confkey:: use ssl
    :synopsis: ENABLE SSL ENCRYPTION

    **ENABLE SSL ENCRYPTION**

    | This option controls if SSL should be enabled.

    **Path**: /settings/NRPE/server

    **Key**: use ssl

    **Default value**: 1

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # ENABLE SSL ENCRYPTION
        # This option controls if SSL should be enabled.
        [/settings/NRPE/server]
        use ssl=1


.. confkey:: verify mode
    :synopsis: VERIFY MODE

    **VERIFY MODE**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/NRPE/server

    **Key**: verify mode

    **Default value**: none

    **Used by**: :module:`NRPEServer`

    **Sample**::

        # VERIFY MODE
        # 
        [/settings/NRPE/server]
        verify mode=none


