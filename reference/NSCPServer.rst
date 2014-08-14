.. default-domain:: nscp

.. module:: NSCPServer
    :synopsis: A server that listens for incoming NSCP connection and processes incoming requests.

===================================
:module:`NSCPServer` --- NSCPServer
===================================
A server that listens for incoming NSCP connection and processes incoming requests.





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
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.allow arguments` | COMMAND ARGUMENT PROCESSING
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.port` | PORT NUMBER
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.use ssl` | ENABLE SSL ENCRYPTION

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/default` | :confkey:`~/settings/default.encoding` | NRPE PAYLOAD ENCODING
    :confpath:`/settings/default` | :confkey:`~/settings/default.modern commands` | Register modern aliases for built-in commands
    :confpath:`/settings/default` | :confkey:`~/settings/default.socket queue size` | LISTEN QUEUE
    :confpath:`/settings/default` | :confkey:`~/settings/default.thread pool` | THREAD POOL
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.allowed ciphers` | ALLOWED CIPHERS
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.allowed hosts` | ALLOWED HOSTS
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.bind to` | BIND TO ADDRESS
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.ca` | CA
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.cache allowed hosts` | CACHE ALLOWED HOSTS
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.certificate` | SSL CERTIFICATE
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.certificate format` | CERTIFICATE FORMAT
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.certificate key` | SSL CERTIFICATE
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.dh` | DH KEY
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.socket queue size` | LISTEN QUEUE
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.thread pool` | THREAD POOL
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.timeout` | TIMEOUT
    :confpath:`/settings/nscp/server` | :confkey:`~/settings/nscp/server.verify mode` | VERIFY MODE







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

            [/settings/default]
            # ALLOWED HOSTS
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

            [/settings/default]
            # BIND TO ADDRESS
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

            [/settings/default]
            # CACHE ALLOWED HOSTS
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

            [/settings/default]
            # NRPE PAYLOAD ENCODING
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

            [/settings/default]
            # INBOX
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

            [/settings/default]
            # Register modern aliases for built-in commands
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

            [/settings/default]
            # PASSWORD
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

            [/settings/default]
            # LISTEN QUEUE
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

            [/settings/default]
            # THREAD POOL
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

            [/settings/default]
            # TIMEOUT
            timeout=30




… nscp / server
---------------
.. confpath:: /settings/nscp/server
    :synopsis: NSCP SERVER SECTION

    **NSCP SERVER SECTION**

    | Section for NSCP (NSCPListener.dll) (check_nscp) protocol options.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`allow arguments` | 0 | COMMAND ARGUMENT PROCESSING
        :confkey:`allowed ciphers` | ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH | ALLOWED CIPHERS
        :confkey:`allowed hosts` | 127.0.0.1 | ALLOWED HOSTS
        :confkey:`bind to` |  | BIND TO ADDRESS
        :confkey:`ca` | ${certificate-path}/ca.pem | CA
        :confkey:`cache allowed hosts` | 1 | CACHE ALLOWED HOSTS
        :confkey:`certificate` | ${certificate-path}/certificate.pem | SSL CERTIFICATE
        :confkey:`certificate format` | PEM | CERTIFICATE FORMAT
        :confkey:`certificate key` | ${certificate-path}/certificate_key.pem | SSL CERTIFICATE
        :confkey:`dh` | ${certificate-path}/nrpe_dh_512.pem | DH KEY
        :confkey:`port` | 5668 | PORT NUMBER
        :confkey:`socket queue size` | 0 | LISTEN QUEUE
        :confkey:`thread pool` | 10 | THREAD POOL
        :confkey:`timeout` | 30 | TIMEOUT
        :confkey:`use ssl` | 1 | ENABLE SSL ENCRYPTION
        :confkey:`verify mode` | none | VERIFY MODE

    **Sample**::

        # NSCP SERVER SECTION
        # Section for NSCP (NSCPListener.dll) (check_nscp) protocol options.
        [/settings/nscp/server]
        allow arguments=0
        allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH
        allowed hosts=127.0.0.1
        bind to=
        ca=${certificate-path}/ca.pem
        cache allowed hosts=1
        certificate=${certificate-path}/certificate.pem
        certificate format=PEM
        certificate key=${certificate-path}/certificate_key.pem
        dh=${certificate-path}/nrpe_dh_512.pem
        port=5668
        socket queue size=0
        thread pool=10
        timeout=30
        use ssl=1
        verify mode=none


    .. confkey:: allow arguments
        :synopsis: COMMAND ARGUMENT PROCESSING

        **COMMAND ARGUMENT PROCESSING**

        | This option determines whether or not the we will allow clients to specify arguments to commands that are executed.

        **Path**: /settings/nscp/server

        **Key**: allow arguments

        **Default value**: 0

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # COMMAND ARGUMENT PROCESSING
            allow arguments=0


    .. confkey:: allowed ciphers
        :synopsis: ALLOWED CIPHERS

        **ALLOWED CIPHERS**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: allowed ciphers

        **Default value**: ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # ALLOWED CIPHERS
            allowed ciphers=ALL:!ADH:!LOW:!EXP:!MD5:@STRENGTH


    .. confkey:: allowed hosts
        :synopsis: ALLOWED HOSTS

        **ALLOWED HOSTS**

        | A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: allowed hosts

        **Default value**: 127.0.0.1

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # ALLOWED HOSTS
            allowed hosts=127.0.0.1


    .. confkey:: bind to
        :synopsis: BIND TO ADDRESS

        **BIND TO ADDRESS**

        | Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: bind to

        **Default value**: 

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # BIND TO ADDRESS
            bind to=


    .. confkey:: ca
        :synopsis: CA

        **CA**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: ca

        **Default value**: ${certificate-path}/ca.pem

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # CA
            ca=${certificate-path}/ca.pem


    .. confkey:: cache allowed hosts
        :synopsis: CACHE ALLOWED HOSTS

        **CACHE ALLOWED HOSTS**

        | If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: cache allowed hosts

        **Default value**: 1

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # CACHE ALLOWED HOSTS
            cache allowed hosts=1


    .. confkey:: certificate
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: certificate

        **Default value**: ${certificate-path}/certificate.pem

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # SSL CERTIFICATE
            certificate=${certificate-path}/certificate.pem


    .. confkey:: certificate format
        :synopsis: CERTIFICATE FORMAT

        **CERTIFICATE FORMAT**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: certificate format

        **Default value**: PEM

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # CERTIFICATE FORMAT
            certificate format=PEM


    .. confkey:: certificate key
        :synopsis: SSL CERTIFICATE

        **SSL CERTIFICATE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: certificate key

        **Default value**: ${certificate-path}/certificate_key.pem

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # SSL CERTIFICATE
            certificate key=${certificate-path}/certificate_key.pem


    .. confkey:: dh
        :synopsis: DH KEY

        **DH KEY**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: dh

        **Default value**: ${certificate-path}/nrpe_dh_512.pem

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # DH KEY
            dh=${certificate-path}/nrpe_dh_512.pem


    .. confkey:: port
        :synopsis: PORT NUMBER

        **PORT NUMBER**

        | Port to use for NSCP.

        **Path**: /settings/nscp/server

        **Key**: port

        **Default value**: 5668

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # PORT NUMBER
            port=5668


    .. confkey:: socket queue size
        :synopsis: LISTEN QUEUE

        **LISTEN QUEUE**

        | Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: socket queue size

        **Default value**: 0

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # LISTEN QUEUE
            socket queue size=0


    .. confkey:: thread pool
        :synopsis: THREAD POOL

        **THREAD POOL**

        | parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: thread pool

        **Default value**: 10

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # THREAD POOL
            thread pool=10


    .. confkey:: timeout
        :synopsis: TIMEOUT

        **TIMEOUT**

        | Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: timeout

        **Default value**: 30

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # TIMEOUT
            timeout=30


    .. confkey:: use ssl
        :synopsis: ENABLE SSL ENCRYPTION

        **ENABLE SSL ENCRYPTION**

        | This option controls if SSL should be enabled.

        **Path**: /settings/nscp/server

        **Key**: use ssl

        **Default value**: 1

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # ENABLE SSL ENCRYPTION
            use ssl=1


    .. confkey:: verify mode
        :synopsis: VERIFY MODE

        **VERIFY MODE**



        **Advanced** (means it is not commonly used)

        **Path**: /settings/nscp/server

        **Key**: verify mode

        **Default value**: none

        **Used by**: :module:`NSCPServer`

        **Sample**::

            [/settings/nscp/server]
            # VERIFY MODE
            verify mode=none


