.. default-domain:: nscp

.. module:: SimpleFileWriter
    :synopsis: Write status updates to a text file (A bit like the NSCA server does)

===============================================
:module:`SimpleFileWriter` --- SimpleFileWriter
===============================================
Write status updates to a text file (A bit like the NSCA server does)





**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/writers/file` | :confkey:`~/settings/writers/file.channel` | CHANNEL
    :confpath:`/settings/writers/file` | :confkey:`~/settings/writers/file.file` | FILE TO WRITE TO
    :confpath:`/settings/writers/file` | :confkey:`~/settings/writers/file.syntax` | MESSAGE SYNTAX








 / settings / writers / file
----------------------------
.. confpath:: /settings/writers/file
    :synopsis: FILE WRITER

    **FILE WRITER**

    | Section for simple file writer module (SimpleFileWriter.dll).


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`channel` | FILE | CHANNEL
        :confkey:`file` | output.txt | FILE TO WRITE TO
        :confkey:`syntax` | ${alias-or-command} ${result} ${message} | MESSAGE SYNTAX

    **Sample**::

        # FILE WRITER
        # Section for simple file writer module (SimpleFileWriter.dll).
        [/settings/writers/file]
        channel=FILE
        file=output.txt
        syntax=${alias-or-command} ${result} ${message}


    .. confkey:: channel
        :synopsis: CHANNEL

        **CHANNEL**

        | The channel to listen to.

        **Path**: /settings/writers/file

        **Key**: channel

        **Default value**: FILE

        **Used by**: :module:`SimpleFileWriter`

        **Sample**::

            [/settings/writers/file]
            # CHANNEL
            channel=FILE


    .. confkey:: file
        :synopsis: FILE TO WRITE TO

        **FILE TO WRITE TO**

        | The filename to write output to.

        **Path**: /settings/writers/file

        **Key**: file

        **Default value**: output.txt

        **Used by**: :module:`SimpleFileWriter`

        **Sample**::

            [/settings/writers/file]
            # FILE TO WRITE TO
            file=output.txt


    .. confkey:: syntax
        :synopsis: MESSAGE SYNTAX

        **MESSAGE SYNTAX**

        | The syntax of the message to write to the line.
        | Can be any arbitrary string as well as include any of the following special keywords:${command} = The command name, ${host} the host, ${channel} the recieving channel, ${alias} the alias for the command, ${alias-or-command} = alias if set otherweise command, ${message} = the message data (no escape), ${result} = The result status (number).

        **Path**: /settings/writers/file

        **Key**: syntax

        **Default value**: ${alias-or-command} ${result} ${message}

        **Used by**: :module:`SimpleFileWriter`

        **Sample**::

            [/settings/writers/file]
            # MESSAGE SYNTAX
            syntax=${alias-or-command} ${result} ${message}


