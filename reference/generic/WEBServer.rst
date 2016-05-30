.. default-domain:: nscp

.. module:: WEBServer
    :synopsis: A server that listens for incoming HTTP connection and processes incoming requests. It provides both a WEB UI as well as a REST API in addition to simplifying configuration of WEB Server module.

=================================
:module:`WEBServer` --- WEBServer
=================================
A server that listens for incoming HTTP connection and processes incoming requests. It provides both a WEB UI as well as a REST API in addition to simplifying configuration of WEB Server module.





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
    :confpath:`/settings/WEB/server` | :confkey:`~/settings/WEB/server.certificate` | CERTIFICATE
    :confpath:`/settings/WEB/server` | :confkey:`~/settings/WEB/server.port` | PORT NUMBER

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/default` | :confkey:`~/settings/default.encoding` | NRPE PAYLOAD ENCODING
    :confpath:`/settings/default` | :confkey:`~/settings/default.socket queue size` | LISTEN QUEUE
    :confpath:`/settings/default` | :confkey:`~/settings/default.thread pool` | THREAD POOL
    :confpath:`/settings/WEB/server` | :confkey:`~/settings/WEB/server.allowed hosts` | ALLOWED HOSTS
    :confpath:`/settings/WEB/server` | :confkey:`~/settings/WEB/server.cache allowed hosts` | CACHE ALLOWED HOSTS
    :confpath:`/settings/WEB/server` | :confkey:`~/settings/WEB/server.password` | PASSWORD








… default
---------

.. confpath:: /settings/default
    :synopsis: 






    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`allowed hosts` | 127.0.0.1 | ALLOWED HOSTS
        :confkey:`bind to` |  | BIND TO ADDRESS
        :confkey:`cache allowed hosts` | 1 | CACHE ALLOWED HOSTS
        :confkey:`encoding` |  | NRPE PAYLOAD ENCODING
        :confkey:`inbox` | inbox | INBOX
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

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

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

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

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

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

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

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

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

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

        **Sample**::

            [/settings/default]
            # INBOX
            inbox=inbox


    .. confkey:: password
        :synopsis: PASSWORD

        **PASSWORD**

        | Password used to authenticate against server

        **Path**: /settings/default

        **Key**: password

        **Default value**: 

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

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

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

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

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

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

        **Used by**: :module:`CheckMKServer`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`WEBServer`

        **Sample**::

            [/settings/default]
            # TIMEOUT
            timeout=30




… WEB / server
--------------

.. confpath:: /settings/WEB/server
    :synopsis: WEB SERVER SECTION

**WEB SERVER SECTION**

    | Section for WEB (WEBServer.dll) (check_WEB) protocol options.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`allowed hosts` | 127.0.0.1 | ALLOWED HOSTS
        :confkey:`cache allowed hosts` | 1 | CACHE ALLOWED HOSTS
        :confkey:`certificate` | ${certificate-path}/certificate.pem | CERTIFICATE
        :confkey:`password` |  | PASSWORD
        :confkey:`port` | 8443s | PORT NUMBER

    **Sample**::

        # WEB SERVER SECTION
        # Section for WEB (WEBServer.dll) (check_WEB) protocol options.
        [/settings/WEB/server]
        allowed hosts=127.0.0.1
        cache allowed hosts=1
        certificate=${certificate-path}/certificate.pem
        password=
        port=8443s


    .. confkey:: allowed hosts
        :synopsis: ALLOWED HOSTS

        **ALLOWED HOSTS**

        | A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/WEB/server

        **Key**: allowed hosts

        **Default value**: 127.0.0.1

        **Used by**: :module:`WEBServer`

        **Sample**::

            [/settings/WEB/server]
            # ALLOWED HOSTS
            allowed hosts=127.0.0.1


    .. confkey:: cache allowed hosts
        :synopsis: CACHE ALLOWED HOSTS

        **CACHE ALLOWED HOSTS**

        | If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server. parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/WEB/server

        **Key**: cache allowed hosts

        **Default value**: 1

        **Used by**: :module:`WEBServer`

        **Sample**::

            [/settings/WEB/server]
            # CACHE ALLOWED HOSTS
            cache allowed hosts=1


    .. confkey:: certificate
        :synopsis: CERTIFICATE

        **CERTIFICATE**

        | Ssl certificate to use for the ssl server

        **Path**: /settings/WEB/server

        **Key**: certificate

        **Default value**: ${certificate-path}/certificate.pem

        **Used by**: :module:`WEBServer`

        **Sample**::

            [/settings/WEB/server]
            # CERTIFICATE
            certificate=${certificate-path}/certificate.pem


    .. confkey:: password
        :synopsis: PASSWORD

        **PASSWORD**

        | Password used to authenticate against server parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/WEB/server

        **Key**: password

        **Default value**: 

        **Used by**: :module:`WEBServer`

        **Sample**::

            [/settings/WEB/server]
            # PASSWORD
            password=


    .. confkey:: port
        :synopsis: PORT NUMBER

        **PORT NUMBER**

        | Port to use for WEB server.

        **Path**: /settings/WEB/server

        **Key**: port

        **Default value**: 8443s

        **Used by**: :module:`WEBServer`

        **Sample**::

            [/settings/WEB/server]
            # PORT NUMBER
            port=8443s


