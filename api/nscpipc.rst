.. default-domain:: python

#######
NSCPIPC
#######




******
Common
******


.. py:class:: NSCPIPC.Common



    .. py:attribute:: Version
    

        ========================= =====
        Possible values           Id
        ========================= =====
        VERSION_1                 1
        ========================= =====

    .. py:attribute:: MessageTypes
    

        ========================= =====
        Possible values           Id
        ========================= =====
        QUERY_REQUEST             1
        QUERY_RESPONSE            2
        EXEC_REQUEST              3
        EXEC_RESPONSE             4
        SUBMIT_REQUEST            5
        SUBMIT_RESPONSE           6
        SETTINGS_REQUEST          10
        SETTINGS_RESPONSE         11
        REGISTRY_REQUEST          12
        REGISTRY_RESPONSE         13
        ERROR_MESSAGE             99
        CUSTOM_MESSAGE            100
        ========================= =====


    **Nested messages**

    * :py:class:`NSCPIPC.Common.Header`


Header
======


.. py:class:: NSCPIPC.Common.Header




    .. py:attribute:: version
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: type
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: cookie
    
        A **required** value of type **string**
        

        

    .. py:attribute:: sequence
    
        A **optional** value of type **int64**
        

        






*************
HeaderMessage
*************


.. py:class:: NSCPIPC.HeaderMessage




    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: type
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: custom_type
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: message
    
        A **required** value of type **string**
        

        





**************
PayloadMessage
**************


.. py:class:: NSCPIPC.PayloadMessage




    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: type
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: message
    
        A **required** value of type **string**
        

        





************
ErrorMessage
************


.. py:class:: NSCPIPC.ErrorMessage




    .. py:attribute:: error
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: sender
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: recipient
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: request_id
    
        A **optional** value of type **int32**
        

        

    **Nested messages**

    * :py:class:`NSCPIPC.ErrorMessage.Message`


Message
=======


.. py:class:: NSCPIPC.ErrorMessage.Message



    .. py:attribute:: Severity
    

        ========================= =====
        Possible values           Id
        ========================= =====
        IS_OK                     1
        HAS_WARNINGS              5
        IS_WARNING                6
        HAS_ERRRORS               7
        IS_ERRROR                 8
        IS_FATAL                  10
        ========================= =====


    .. py:attribute:: line
    
        A **optional** value of type **int32**
        

        

    .. py:attribute:: date
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: severity
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: message
    
        A **required** value of type **string**
        

        

    .. py:attribute:: details
    
        A **repeated** value of type **string**
        

        




