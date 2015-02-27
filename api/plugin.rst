.. default-domain:: python

######
Plugin
######




******
Common
******


.. py:class:: Plugin.Common

    Common utility types (re-used in various messages below)

    .. py:attribute:: ResultCode
    
        A "nagios" status result.

        ========================= =====
        Possible values           Id
        ========================= =====
        OK                        0
        WARNING                   1
        CRITICAL                  2
        UNKNOWN                   3
        ========================= =====

    .. py:attribute:: DataType
    
        Type of data fields.
        @deprecated in favour of checking which field is available.

        ========================= =====
        Possible values           Id
        ========================= =====
        INT                       1
        STRING                    2
        FLOAT                     3
        BOOL                      4
        LIST                      5
        ========================= =====

    .. py:attribute:: Version
    
        Main protocol version used
        @deprecated Makes very little sense and should be removed

        ========================= =====
        Possible values           Id
        ========================= =====
        VERSION_1                 1
        ========================= =====


    **Nested messages**

    * :py:class:`Plugin.Common.AnyDataType`
    * :py:class:`Plugin.Common.KeyValue`
    * :py:class:`Plugin.Common.Host`
    * :py:class:`Plugin.Common.Header`
    * :py:class:`Plugin.Common.Attachment`
    * :py:class:`Plugin.Common.PerformanceData`
    * :py:class:`Plugin.Common.Status`


AnyDataType
===========


.. py:class:: Plugin.Common.AnyDataType

    Data type used to wrap "any" primitive type.
    Used whenever the type can change.


    .. py:attribute:: string_data
    
        A **optional** value of type **string**
        
        String payload

        

    .. py:attribute:: int_data
    
        A **optional** value of type **int64**
        
        Numeric integer payload

        

    .. py:attribute:: float_data
    
        A **optional** value of type **double**
        
        Numeric floating point payload

        

    .. py:attribute:: bool_data
    
        A **optional** value of type **bool**
        
        Boolean (true/false) payload

        

    .. py:attribute:: list_data
    
        A **repeated** value of type **string**
        
        A string (multiple lines are separated by list entries
        @todo: remove repeated modifier from this field.

        




KeyValue
========


.. py:class:: Plugin.Common.KeyValue

    Key value pair


    .. py:attribute:: key
    
        A **required** value of type **string**
        
        The key identifying the value

        

    .. py:attribute:: value
    
        A **required** value of type **string**
        
        The value

        

    .. py:attribute:: data
    
        A **repeated** value of type **string**
        
        Optional extra fields to store various custom data

        




Host
====


.. py:class:: Plugin.Common.Host

    Field identifying a host entry


    .. py:attribute:: id
    
        A **optional** value of type **string**
        
        A unique identifier representing the host in *this* message

        

    .. py:attribute:: host
    
        A **optional** value of type **string**
        
        The host name

        

    .. py:attribute:: address
    
        A **optional** value of type **string**
        
        The address (usually the ip)

        

    .. py:attribute:: protocol
    
        A **optional** value of type **string**
        
        The protocol used to talk whit this host.

        

    .. py:attribute:: comment
    
        A **optional** value of type **string**
        
        A comment describing the host

        

    .. py:attribute:: metadata
    
        A **repeated** value of type **message**
        
        A key value store with attributes describing this host.
        The content and use of this attributes are application defined.

        

    .. py:attribute:: tags
    
        A **repeated** value of type **string**
        
        A numer of tags defined for this host (can be used for routing purposes).

        




Header
======


.. py:class:: Plugin.Common.Header

    Header used in all messages.
    Contains basic information about the message.


    .. py:attribute:: version
    
        A **required** value of type **enum**
        
        Version of message.
        @ deprecated Not really useful

        

    .. py:attribute:: max_supported_version
    
        A **optional** value of type **enum**
        
        Maximmu supported version.
        Was planned to be used to negotiate version but was never used.
        @deprecated not used.

        

    .. py:attribute:: source_id
    
        A **optional** value of type **string**
        
        Source (sending) system.
        This is the system which sends the message (me).

        

    .. py:attribute:: sender_id
    
        A **optional** value of type **string**
        
        Sender is the original source of the message.
        THis is same as source unless message has been relayed.

        

    .. py:attribute:: recipient_id
    
        A **optional** value of type **string**
        
        Recipient is the final destination.
        This is the same as destination_id unless message is to be relayed.

        

    .. py:attribute:: destination_id
    
        A **optional** value of type **string**
        
        Destination (target) system.
        The system which will receive the message.

        

    .. py:attribute:: message_id
    
        A **optional** value of type **int64**
        
        Message identification.
        Has no meaning apart from identification.
        Set by source system and retained in any processing system.

        

    .. py:attribute:: metadata
    
        A **repeated** value of type **message**
        
        Meta data related to the message.

        

    .. py:attribute:: tags
    
        A **repeated** value of type **string**
        
        A list of tags associated with the message.

        

    .. py:attribute:: hosts
    
        A **repeated** value of type **message**
        
        A list of hosts.
        All recipient/destination ids point to objects in this data set.

        




Attachment
==========


.. py:class:: Plugin.Common.Attachment

    Attachment is used to attach information to another request.
    This is usually used to send along additional information not directly relatedt to the request.
    Or send unstructured data which is not supported by the original request.


    .. py:attribute:: id
    
        A **optional** value of type **int64**
        
        Identifier of attachment (for reference purpouses)

        

    .. py:attribute:: type
    
        A **required** value of type **string**
        
        The mime type for this attachment.

        

    .. py:attribute:: metadata
    
        A **repeated** value of type **message**
        
        Meta data related to the attachment.

        

    .. py:attribute:: tags
    
        A **repeated** value of type **string**
        
        A list of tags associated with the attachment.

        

    .. py:attribute:: data
    
        A **required** value of type **string**
        
        The actual attachment (encoded)

        




PerformanceData
===============


.. py:class:: Plugin.Common.PerformanceData




    .. py:attribute:: alias
    
        A **required** value of type **string**
        

        

    .. py:attribute:: type
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: int_value
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: string_value
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: float_value
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: bool_value
    
        A **optional** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.Common.PerformanceData.IntValue`
    * :py:class:`Plugin.Common.PerformanceData.StringValue`
    * :py:class:`Plugin.Common.PerformanceData.FloatValue`
    * :py:class:`Plugin.Common.PerformanceData.BoolValue`


IntValue
========


.. py:class:: Plugin.Common.PerformanceData.IntValue




    .. py:attribute:: value
    
        A **required** value of type **int64**
        

        

    .. py:attribute:: unit
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: warning
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: critical
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: minimum
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: maximum
    
        A **optional** value of type **int64**
        

        




StringValue
===========


.. py:class:: Plugin.Common.PerformanceData.StringValue




    .. py:attribute:: value
    
        A **required** value of type **string**
        

        




FloatValue
==========


.. py:class:: Plugin.Common.PerformanceData.FloatValue




    .. py:attribute:: value
    
        A **required** value of type **double**
        

        

    .. py:attribute:: unit
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: warning
    
        A **optional** value of type **double**
        

        

    .. py:attribute:: critical
    
        A **optional** value of type **double**
        

        

    .. py:attribute:: minimum
    
        A **optional** value of type **double**
        

        

    .. py:attribute:: maximum
    
        A **optional** value of type **double**
        

        




BoolValue
=========


.. py:class:: Plugin.Common.PerformanceData.BoolValue




    .. py:attribute:: value
    
        A **required** value of type **bool**
        

        

    .. py:attribute:: unit
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: warning
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: critical
    
        A **optional** value of type **bool**
        

        





Status
======


.. py:class:: Plugin.Common.Status



    .. py:attribute:: StatusType
    

        ========================= =====
        Possible values           Id
        ========================= =====
        STATUS_OK                 0
        STATUS_WARNING            1
        STATUS_ERROR              2
        STATUS_DELAYED            3
        ========================= =====


    .. py:attribute:: status
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: message
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: data
    
        A **optional** value of type **string**
        

        






*******************
QueryRequestMessage
*******************


.. py:class:: Plugin.QueryRequestMessage

    Query request
    Used for querying the client this is the "normal" check_nrpe message request.
    Associated response is :py:class:`Plugin.QueryResponseMessage`


    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        

    **Nested messages**

    * :py:class:`Plugin.QueryRequestMessage.Request`


Request
=======


.. py:class:: Plugin.QueryRequestMessage.Request




    .. py:attribute:: id
    
        A **optional** value of type **int32**
        

        

    .. py:attribute:: target
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: command
    
        A **required** value of type **string**
        

        

    .. py:attribute:: alias
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: arguments
    
        A **repeated** value of type **string**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        






********************
QueryResponseMessage
********************


.. py:class:: Plugin.QueryResponseMessage

    Query response
    Used for querying the client this is the "normal" check_nrpe message request.
    Associated request is :py:class:`Plugin.QueryRequestMessage`


    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        

    **Nested messages**

    * :py:class:`Plugin.QueryResponseMessage.Response`


Response
========


.. py:class:: Plugin.QueryResponseMessage.Response




    .. py:attribute:: id
    
        A **optional** value of type **int32**
        

        

    .. py:attribute:: source
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: command
    
        A **required** value of type **string**
        

        

    .. py:attribute:: alias
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: arguments
    
        A **repeated** value of type **string**
        

        

    .. py:attribute:: result
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: message
    
        A **required** value of type **string**
        

        

    .. py:attribute:: data
    
        A **optional** value of type **bytes**
        

        

    .. py:attribute:: perf
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        






*********************
ExecuteRequestMessage
*********************


.. py:class:: Plugin.ExecuteRequestMessage

    Execute command request and response.
    Used for executing commands on clients similar to :py:class:`Plugin.QueryRequestMessage` but wont return nagios check data
    Associated response is :py:class:`Plugin.ExecuteResponseMessage`


    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        

    **Nested messages**

    * :py:class:`Plugin.ExecuteRequestMessage.Request`


Request
=======


.. py:class:: Plugin.ExecuteRequestMessage.Request




    .. py:attribute:: id
    
        A **optional** value of type **int32**
        

        

    .. py:attribute:: command
    
        A **required** value of type **string**
        

        

    .. py:attribute:: arguments
    
        A **repeated** value of type **string**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        






**********************
ExecuteResponseMessage
**********************


.. py:class:: Plugin.ExecuteResponseMessage




    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        

    **Nested messages**

    * :py:class:`Plugin.ExecuteResponseMessage.Response`


Response
========


.. py:class:: Plugin.ExecuteResponseMessage.Response




    .. py:attribute:: id
    
        A **optional** value of type **int32**
        

        

    .. py:attribute:: command
    
        A **required** value of type **string**
        

        

    .. py:attribute:: arguments
    
        A **repeated** value of type **string**
        

        

    .. py:attribute:: result
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: message
    
        A **required** value of type **string**
        

        

    .. py:attribute:: data
    
        A **optional** value of type **bytes**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        






********************
SubmitRequestMessage
********************


.. py:class:: Plugin.SubmitRequestMessage

    Submit result request message.
    Used for submitting a passive check results.
    The actual payload (Request) is a normal :py:class:`Plugin.QueryResponseMessage.Response`.
    Associated response is :py:class:`Plugin.SubmitResponseMessage`


    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: channel
    
        A **required** value of type **string**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        





*********************
SubmitResponseMessage
*********************


.. py:class:: Plugin.SubmitResponseMessage

    Submit result response message.
    Response from submitting a passive check results.
    Associated request is :py:class:`Plugin.SubmitRequestMessage`


    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        

    **Nested messages**

    * :py:class:`Plugin.SubmitResponseMessage.Response`


Response
========


.. py:class:: Plugin.SubmitResponseMessage.Response




    .. py:attribute:: id
    
        A **optional** value of type **int32**
        

        

    .. py:attribute:: command
    
        A **required** value of type **string**
        

        

    .. py:attribute:: status
    
        A **required** value of type **message**
        

        

    .. py:attribute:: attachments
    
        A **repeated** value of type **message**
        
        The attachment is used to attach additional free form information.

        






********
Registry
********


.. py:class:: Plugin.Registry

    Registration is an internal message.
    It is not used to submit checks or query status instead it is used so register modules, plug-ins, command.
    As well as query for them.
    The registry is a central component inside NSClient++ and this is the way to interact with the registry.

    .. py:attribute:: ItemType
    

        ========================= =====
        Possible values           Id
        ========================= =====
        QUERY                     1
        COMMAND                   2
        HANDLER                   3
        PLUGIN                    4
        QUERY_ALIAS               5
        ROUTER                    6
        MODULE                    7
        SCHEDULE                  8
        ALL                       99
        ========================= =====

    .. py:attribute:: Command
    

        ========================= =====
        Possible values           Id
        ========================= =====
        LOAD                      1
        UNLOAD                    2
        RELOAD                    3
        ========================= =====


    **Nested messages**

    * :py:class:`Plugin.Registry.Query`
    * :py:class:`Plugin.Registry.Information`
    * :py:class:`Plugin.Registry.KeyWordDescription`
    * :py:class:`Plugin.Registry.ParameterDetail`
    * :py:class:`Plugin.Registry.ParameterDetails`
    * :py:class:`Plugin.Registry.Schedule`


Query
=====


.. py:class:: Plugin.Registry.Query




    .. py:attribute:: expression
    
        A **optional** value of type **string**
        

        




Information
===========


.. py:class:: Plugin.Registry.Information




    .. py:attribute:: title
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: description
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: metadata
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: min_version
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: max_version
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: advanced
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: plugin
    
        A **repeated** value of type **string**
        

        




KeyWordDescription
==================


.. py:class:: Plugin.Registry.KeyWordDescription




    .. py:attribute:: parameter
    
        A **required** value of type **string**
        

        

    .. py:attribute:: context
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: key
    
        A **required** value of type **string**
        

        

    .. py:attribute:: short_description
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: long_description
    
        A **optional** value of type **string**
        

        




ParameterDetail
===============


.. py:class:: Plugin.Registry.ParameterDetail




    .. py:attribute:: name
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: default_value
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: required
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: repeatable
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: content_type
    
        A **optional** value of type **enum**
        

        

    .. py:attribute:: short_description
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: long_description
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: keyword
    
        A **repeated** value of type **message**
        

        




ParameterDetails
================


.. py:class:: Plugin.Registry.ParameterDetails




    .. py:attribute:: parameter
    
        A **repeated** value of type **message**
        

        




Schedule
========


.. py:class:: Plugin.Registry.Schedule




    .. py:attribute:: id
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: cron
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: interval
    
        A **optional** value of type **string**
        

        






**********************
RegistryRequestMessage
**********************


.. py:class:: Plugin.RegistryRequestMessage




    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.RegistryRequestMessage.Request`


Request
=======


.. py:class:: Plugin.RegistryRequestMessage.Request




    .. py:attribute:: id
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: registration
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: inventory
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: control
    
        A **optional** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.RegistryRequestMessage.Request.Registration`
    * :py:class:`Plugin.RegistryRequestMessage.Request.Inventory`
    * :py:class:`Plugin.RegistryRequestMessage.Request.Control`


Registration
============


.. py:class:: Plugin.RegistryRequestMessage.Request.Registration




    .. py:attribute:: plugin_id
    
        A **optional** value of type **int32**
        

        

    .. py:attribute:: type
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: name
    
        A **required** value of type **string**
        

        

    .. py:attribute:: info
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: unregister
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: alias
    
        A **repeated** value of type **string**
        

        

    .. py:attribute:: schedule
    
        A **repeated** value of type **message**
        

        




Inventory
=========


.. py:class:: Plugin.RegistryRequestMessage.Request.Inventory




    .. py:attribute:: plugin
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: type
    
        A **repeated** value of type **enum**
        

        

    .. py:attribute:: name
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: fetch_all
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: fetch_information
    
        A **optional** value of type **bool**
        

        




Control
=======


.. py:class:: Plugin.RegistryRequestMessage.Request.Control




    .. py:attribute:: command
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: type
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: name
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: alias
    
        A **optional** value of type **string**
        

        







***********************
RegistryResponseMessage
***********************


.. py:class:: Plugin.RegistryResponseMessage




    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.RegistryResponseMessage.Response`


Response
========


.. py:class:: Plugin.RegistryResponseMessage.Response




    .. py:attribute:: id
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: result
    
        A **required** value of type **message**
        

        

    .. py:attribute:: registration
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: inventory
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: control
    
        A **optional** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.RegistryResponseMessage.Response.Registration`
    * :py:class:`Plugin.RegistryResponseMessage.Response.Inventory`
    * :py:class:`Plugin.RegistryResponseMessage.Response.Control`


Registration
============


.. py:class:: Plugin.RegistryResponseMessage.Response.Registration




    .. py:attribute:: item_id
    
        A **optional** value of type **int32**
        

        




Inventory
=========


.. py:class:: Plugin.RegistryResponseMessage.Response.Inventory




    .. py:attribute:: plugin
    
        A **repeated** value of type **string**
        

        

    .. py:attribute:: type
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: name
    
        A **required** value of type **string**
        

        

    .. py:attribute:: info
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: parameters
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: schedule
    
        A **repeated** value of type **message**
        

        




Control
=======


.. py:class:: Plugin.RegistryResponseMessage.Response.Control










***************************
ScheduleNotificationMessage
***************************


.. py:class:: Plugin.ScheduleNotificationMessage




    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.ScheduleNotificationMessage.Request`


Request
=======


.. py:class:: Plugin.ScheduleNotificationMessage.Request




    .. py:attribute:: id
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: plugin_id
    
        A **required** value of type **int32**
        

        

    .. py:attribute:: info
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: schedule
    
        A **optional** value of type **message**
        

        






********
Settings
********


.. py:class:: Plugin.Settings

    Settings is an internal message.
    It is not used to submit checks or query status instead it is used to interact with the settings store.
    The settings is a central component inside NSClient++ and this is the way to interact with it.

    .. py:attribute:: Command
    

        ========================= =====
        Possible values           Id
        ========================= =====
        LOAD                      1
        SAVE                      2
        RELOAD                    3
        ========================= =====


    **Nested messages**

    * :py:class:`Plugin.Settings.Node`
    * :py:class:`Plugin.Settings.Query`
    * :py:class:`Plugin.Settings.Information`


Node
====


.. py:class:: Plugin.Settings.Node




    .. py:attribute:: path
    
        A **required** value of type **string**
        

        

    .. py:attribute:: key
    
        A **optional** value of type **string**
        

        




Query
=====


.. py:class:: Plugin.Settings.Query




    .. py:attribute:: expression
    
        A **optional** value of type **string**
        

        




Information
===========


.. py:class:: Plugin.Settings.Information




    .. py:attribute:: title
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: description
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: default_value
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: min_version
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: max_version
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: advanced
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: sample
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: sample_usage
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: plugin
    
        A **repeated** value of type **string**
        

        






**********************
SettingsRequestMessage
**********************


.. py:class:: Plugin.SettingsRequestMessage




    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.SettingsRequestMessage.Request`


Request
=======


.. py:class:: Plugin.SettingsRequestMessage.Request




    .. py:attribute:: id
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: plugin_id
    
        A **required** value of type **int32**
        

        

    .. py:attribute:: registration
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: query
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: update
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: inventory
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: control
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: status
    
        A **optional** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.SettingsRequestMessage.Request.Registration`
    * :py:class:`Plugin.SettingsRequestMessage.Request.Query`
    * :py:class:`Plugin.SettingsRequestMessage.Request.Update`
    * :py:class:`Plugin.SettingsRequestMessage.Request.Inventory`
    * :py:class:`Plugin.SettingsRequestMessage.Request.Control`
    * :py:class:`Plugin.SettingsRequestMessage.Request.Status`


Registration
============


.. py:class:: Plugin.SettingsRequestMessage.Request.Registration




    .. py:attribute:: node
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: info
    
        A **optional** value of type **message**
        

        




Query
=====


.. py:class:: Plugin.SettingsRequestMessage.Request.Query




    .. py:attribute:: node
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: query
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: recursive
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: type
    
        A **optional** value of type **enum**
        

        

    .. py:attribute:: default_value
    
        A **optional** value of type **message**
        

        




Update
======


.. py:class:: Plugin.SettingsRequestMessage.Request.Update




    .. py:attribute:: node
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: value
    
        A **optional** value of type **message**
        

        




Inventory
=========


.. py:class:: Plugin.SettingsRequestMessage.Request.Inventory




    .. py:attribute:: plugin
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: node
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: query
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: recursive_fetch
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: fetch_keys
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: fetch_paths
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: fetch_samples
    
        A **optional** value of type **bool**
        

        

    .. py:attribute:: descriptions
    
        A **optional** value of type **bool**
        

        




Control
=======


.. py:class:: Plugin.SettingsRequestMessage.Request.Control




    .. py:attribute:: command
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: context
    
        A **optional** value of type **string**
        

        




Status
======


.. py:class:: Plugin.SettingsRequestMessage.Request.Status










***********************
SettingsResponseMessage
***********************


.. py:class:: Plugin.SettingsResponseMessage




    .. py:attribute:: header
    
        A **required** value of type **message**
        

        

    .. py:attribute:: payload
    
        A **repeated** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.SettingsResponseMessage.Response`


Response
========


.. py:class:: Plugin.SettingsResponseMessage.Response




    .. py:attribute:: id
    
        A **optional** value of type **int64**
        

        

    .. py:attribute:: result
    
        A **required** value of type **message**
        

        

    .. py:attribute:: registration
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: query
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: update
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: inventory
    
        A **repeated** value of type **message**
        

        

    .. py:attribute:: control
    
        A **optional** value of type **message**
        

        

    .. py:attribute:: status
    
        A **optional** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.SettingsResponseMessage.Response.Registration`
    * :py:class:`Plugin.SettingsResponseMessage.Response.Query`
    * :py:class:`Plugin.SettingsResponseMessage.Response.Update`
    * :py:class:`Plugin.SettingsResponseMessage.Response.Inventory`
    * :py:class:`Plugin.SettingsResponseMessage.Response.Control`
    * :py:class:`Plugin.SettingsResponseMessage.Response.Status`


Registration
============


.. py:class:: Plugin.SettingsResponseMessage.Response.Registration







Query
=====


.. py:class:: Plugin.SettingsResponseMessage.Response.Query




    .. py:attribute:: node
    
        A **required** value of type **message**
        

        

    .. py:attribute:: value
    
        A **required** value of type **message**
        

        




Update
======


.. py:class:: Plugin.SettingsResponseMessage.Response.Update







Inventory
=========


.. py:class:: Plugin.SettingsResponseMessage.Response.Inventory




    .. py:attribute:: node
    
        A **required** value of type **message**
        

        

    .. py:attribute:: info
    
        A **required** value of type **message**
        

        

    .. py:attribute:: value
    
        A **optional** value of type **message**
        

        




Control
=======


.. py:class:: Plugin.SettingsResponseMessage.Response.Control







Status
======


.. py:class:: Plugin.SettingsResponseMessage.Response.Status




    .. py:attribute:: context
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: type
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: has_changed
    
        A **optional** value of type **bool**
        

        







********
LogEntry
********


.. py:class:: Plugin.LogEntry

    LogEntry is used to log status information.


    .. py:attribute:: entry
    
        A **repeated** value of type **message**
        

        

    **Nested messages**

    * :py:class:`Plugin.LogEntry.Entry`


Entry
=====


.. py:class:: Plugin.LogEntry.Entry



    .. py:attribute:: Level
    

        ========================= =====
        Possible values           Id
        ========================= =====
        LOG_DEBUG                 500
        LOG_INFO                  150
        LOG_WARNING               50
        LOG_ERROR                 10
        LOG_CRITICAL              1
        ========================= =====


    .. py:attribute:: level
    
        A **required** value of type **enum**
        

        

    .. py:attribute:: sender
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: file
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: line
    
        A **optional** value of type **int32**
        

        

    .. py:attribute:: message
    
        A **optional** value of type **string**
        

        

    .. py:attribute:: date
    
        A **optional** value of type **int32**
        

        




