######
# Plugin #

## Common ##

<dl>
  <dt>    Common utility types (re-used in various messages below)</dt>
  <dd>
    <p>Common utility types (re-used in various messages below)</p>
    <p>.. py:attribute:: ResultCode</p>
    <p></p>
    <p>A "nagios" status result.</p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>OK                        0</p>
    <p>WARNING                   1</p>
    <p>CRITICAL                  2</p>
    <p>UNKNOWN                   3</p>
    <p>========================= =====</p>
    <p>.. py:attribute:: DataType</p>
    <p></p>
    <p>Type of data fields.</p>
    <p>@deprecated in favour of checking which field is available.</p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>INT                       1</p>
    <p>STRING                    2</p>
    <p>FLOAT                     3</p>
    <p>BOOL                      4</p>
    <p>LIST                      5</p>
    <p>========================= =====</p>
    <p>.. py:attribute:: Version</p>
    <p></p>
    <p>Main protocol version used</p>
    <p>@deprecated Makes very little sense and should be removed</p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>VERSION_1                 1</p>
    <p>========================= =====</p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.Common.AnyDataType`</p>
    <p>* :py:class:`Plugin.Common.KeyValue`</p>
    <p>* :py:class:`Plugin.Common.Host`</p>
    <p>* :py:class:`Plugin.Common.Header`</p>
    <p>* :py:class:`Plugin.Common.Attachment`</p>
    <p>* :py:class:`Plugin.Common.PerformanceData`</p>
    <p>* :py:class:`Plugin.Common.Status`</p>
  </dd>
</dl>
### AnyDataType ###

<dl>
  <dt>    Data type used to wrap "any" primitive type.</dt>
  <dd>
    <p>Data type used to wrap "any" primitive type.</p>
    <p>Used whenever the type can change.</p>
    <p>.. py:attribute:: string_data</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>String payload</p>
    <p></p>
    <p>.. py:attribute:: int_data</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p>Numeric integer payload</p>
    <p></p>
    <p>.. py:attribute:: float_data</p>
    <p></p>
    <p>A **optional** value of type **double**</p>
    <p></p>
    <p>Numeric floating point payload</p>
    <p></p>
    <p>.. py:attribute:: bool_data</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p>Boolean (true/false) payload</p>
    <p></p>
    <p>.. py:attribute:: list_data</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p>A string (multiple lines are separated by list entries</p>
    <p>@todo: remove repeated modifier from this field.</p>
    <p></p>
  </dd>
</dl>
### KeyValue ###

<dl>
  <dt>    Key value pair</dt>
  <dd>
    <p>Key value pair</p>
    <p>.. py:attribute:: key</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p>The key identifying the value</p>
    <p></p>
    <p>.. py:attribute:: value</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p>The value</p>
    <p></p>
    <p>.. py:attribute:: data</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p>Optional extra fields to store various custom data</p>
    <p></p>
  </dd>
</dl>
### Host ###

<dl>
  <dt>    Field identifying a host entry</dt>
  <dd>
    <p>Field identifying a host entry</p>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>A unique identifier representing the host in *this* message</p>
    <p></p>
    <p>.. py:attribute:: host</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>The host name</p>
    <p></p>
    <p>.. py:attribute:: address</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>The address (usually the ip)</p>
    <p></p>
    <p>.. py:attribute:: protocol</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>The protocol used to talk whit this host.</p>
    <p></p>
    <p>.. py:attribute:: comment</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>A comment describing the host</p>
    <p></p>
    <p>.. py:attribute:: metadata</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>A key value store with attributes describing this host.</p>
    <p>The content and use of this attributes are application defined.</p>
    <p></p>
    <p>.. py:attribute:: tags</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p>A numer of tags defined for this host (can be used for routing purposes).</p>
    <p></p>
  </dd>
</dl>
### Header ###

<dl>
  <dt>    Header used in all messages.</dt>
  <dd>
    <p>Header used in all messages.</p>
    <p>Contains basic information about the message.</p>
    <p>.. py:attribute:: version</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p>Version of message.</p>
    <p>@ deprecated Not really useful</p>
    <p></p>
    <p>.. py:attribute:: max_supported_version</p>
    <p></p>
    <p>A **optional** value of type **enum**</p>
    <p></p>
    <p>Maximmu supported version.</p>
    <p>Was planned to be used to negotiate version but was never used.</p>
    <p>@deprecated not used.</p>
    <p></p>
    <p>.. py:attribute:: source_id</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>Source (sending) system.</p>
    <p>This is the system which sends the message (me).</p>
    <p></p>
    <p>.. py:attribute:: sender_id</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>Sender is the original source of the message.</p>
    <p>THis is same as source unless message has been relayed.</p>
    <p></p>
    <p>.. py:attribute:: recipient_id</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>Recipient is the final destination.</p>
    <p>This is the same as destination_id unless message is to be relayed.</p>
    <p></p>
    <p>.. py:attribute:: destination_id</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p>Destination (target) system.</p>
    <p>The system which will receive the message.</p>
    <p></p>
    <p>.. py:attribute:: message_id</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p>Message identification.</p>
    <p>Has no meaning apart from identification.</p>
    <p>Set by source system and retained in any processing system.</p>
    <p></p>
    <p>.. py:attribute:: metadata</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>Meta data related to the message.</p>
    <p></p>
    <p>.. py:attribute:: tags</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p>A list of tags associated with the message.</p>
    <p></p>
    <p>.. py:attribute:: hosts</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>A list of hosts.</p>
    <p>All recipient/destination ids point to objects in this data set.</p>
    <p></p>
  </dd>
</dl>
### Attachment ###

<dl>
  <dt>    Attachment is used to attach information to another request.</dt>
  <dd>
    <p>Attachment is used to attach information to another request.</p>
    <p>This is usually used to send along additional information not directly relatedt to the request.</p>
    <p>Or send unstructured data which is not supported by the original request.</p>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p>Identifier of attachment (for reference purpouses)</p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p>The mime type for this attachment.</p>
    <p></p>
    <p>.. py:attribute:: metadata</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>Meta data related to the attachment.</p>
    <p></p>
    <p>.. py:attribute:: tags</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p>A list of tags associated with the attachment.</p>
    <p></p>
    <p>.. py:attribute:: data</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p>The actual attachment (encoded)</p>
    <p></p>
  </dd>
</dl>
### PerformanceData ###

<dl>
  <dt>    .. py : attribute :  : alias</dt>
  <dd>
    <p>.. py:attribute:: alias</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: int_value</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: string_value</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: float_value</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: bool_value</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.Common.PerformanceData.IntValue`</p>
    <p>* :py:class:`Plugin.Common.PerformanceData.StringValue`</p>
    <p>* :py:class:`Plugin.Common.PerformanceData.FloatValue`</p>
    <p>* :py:class:`Plugin.Common.PerformanceData.BoolValue`</p>
  </dd>
</dl>
### IntValue ###

<dl>
  <dt>    .. py : attribute :  : value</dt>
  <dd>
    <p>.. py:attribute:: value</p>
    <p></p>
    <p>A **required** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: unit</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: warning</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: critical</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: minimum</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: maximum</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### StringValue ###

<dl>
  <dt>    .. py : attribute :  : value</dt>
  <dd>
    <p>.. py:attribute:: value</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### FloatValue ###

<dl>
  <dt>    .. py : attribute :  : value</dt>
  <dd>
    <p>.. py:attribute:: value</p>
    <p></p>
    <p>A **required** value of type **double**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: unit</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: warning</p>
    <p></p>
    <p>A **optional** value of type **double**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: critical</p>
    <p></p>
    <p>A **optional** value of type **double**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: minimum</p>
    <p></p>
    <p>A **optional** value of type **double**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: maximum</p>
    <p></p>
    <p>A **optional** value of type **double**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### BoolValue ###

<dl>
  <dt>    .. py : attribute :  : value</dt>
  <dd>
    <p>.. py:attribute:: value</p>
    <p></p>
    <p>A **required** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: unit</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: warning</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: critical</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Status ###

<dl>
  <dt>    .. py : attribute :  : StatusType</dt>
  <dd>
    <p>.. py:attribute:: StatusType</p>
    <p></p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>STATUS_OK                 0</p>
    <p>STATUS_WARNING            1</p>
    <p>STATUS_ERROR              2</p>
    <p>STATUS_DELAYED            3</p>
    <p>========================= =====</p>
    <p>.. py:attribute:: status</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: message</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: data</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## QueryRequestMessage ##

<dl>
  <dt>    Query request</dt>
  <dd>
    <p>Query request</p>
    <p>Used for querying the client this is the "normal" check_nrpe message request.</p>
    <p>Associated response is :py:class:`Plugin.QueryResponseMessage`</p>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.QueryRequestMessage.Request`</p>
  </dd>
</dl>
### Request ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: target</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: command</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: alias</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: arguments</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
  </dd>
</dl>
## QueryResponseMessage ##

<dl>
  <dt>    Query response</dt>
  <dd>
    <p>Query response</p>
    <p>Used for querying the client this is the "normal" check_nrpe message request.</p>
    <p>Associated request is :py:class:`Plugin.QueryRequestMessage`</p>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.QueryResponseMessage.Response`</p>
  </dd>
</dl>
### Response ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: source</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: command</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: alias</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: arguments</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: result</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: message</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: data</p>
    <p></p>
    <p>A **optional** value of type **bytes**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: perf</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
  </dd>
</dl>
## ExecuteRequestMessage ##

<dl>
  <dt>    Execute command request and response.</dt>
  <dd>
    <p>Execute command request and response.</p>
    <p>Used for executing commands on clients similar to :py:class:`Plugin.QueryRequestMessage` but wont return nagios check data</p>
    <p>Associated response is :py:class:`Plugin.ExecuteResponseMessage`</p>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.ExecuteRequestMessage.Request`</p>
  </dd>
</dl>
### Request ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: command</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: arguments</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
  </dd>
</dl>
## ExecuteResponseMessage ##

<dl>
  <dt>    .. py : attribute :  : header</dt>
  <dd>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.ExecuteResponseMessage.Response`</p>
  </dd>
</dl>
### Response ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: command</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: arguments</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: result</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: message</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: data</p>
    <p></p>
    <p>A **optional** value of type **bytes**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
  </dd>
</dl>
## SubmitRequestMessage ##

<dl>
  <dt>    Submit result request message.</dt>
  <dd>
    <p>Submit result request message.</p>
    <p>Used for submitting a passive check results.</p>
    <p>The actual payload (Request) is a normal :py:class:`Plugin.QueryResponseMessage.Response`.</p>
    <p>Associated response is :py:class:`Plugin.SubmitResponseMessage`</p>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: channel</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
  </dd>
</dl>
## SubmitResponseMessage ##

<dl>
  <dt>    Submit result response message.</dt>
  <dd>
    <p>Submit result response message.</p>
    <p>Response from submitting a passive check results.</p>
    <p>Associated request is :py:class:`Plugin.SubmitRequestMessage`</p>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.SubmitResponseMessage.Response`</p>
  </dd>
</dl>
### Response ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: command</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: status</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: attachments</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p>The attachment is used to attach additional free form information.</p>
    <p></p>
  </dd>
</dl>
## Registry ##

<dl>
  <dt>    Registration is an internal message.</dt>
  <dd>
    <p>Registration is an internal message.</p>
    <p>It is not used to submit checks or query status instead it is used so register modules, plug-ins, command.</p>
    <p>As well as query for them.</p>
    <p>The registry is a central component inside NSClient++ and this is the way to interact with the registry.</p>
    <p>.. py:attribute:: ItemType</p>
    <p></p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>QUERY                     1</p>
    <p>COMMAND                   2</p>
    <p>HANDLER                   3</p>
    <p>PLUGIN                    4</p>
    <p>QUERY_ALIAS               5</p>
    <p>ROUTER                    6</p>
    <p>MODULE                    7</p>
    <p>SCHEDULE                  8</p>
    <p>ALL                       99</p>
    <p>========================= =====</p>
    <p>.. py:attribute:: Command</p>
    <p></p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>LOAD                      1</p>
    <p>UNLOAD                    2</p>
    <p>RELOAD                    3</p>
    <p>========================= =====</p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.Registry.Query`</p>
    <p>* :py:class:`Plugin.Registry.Information`</p>
    <p>* :py:class:`Plugin.Registry.KeyWordDescription`</p>
    <p>* :py:class:`Plugin.Registry.ParameterDetail`</p>
    <p>* :py:class:`Plugin.Registry.ParameterDetails`</p>
    <p>* :py:class:`Plugin.Registry.Schedule`</p>
  </dd>
</dl>
### Query ###

<dl>
  <dt>    .. py : attribute :  : expression</dt>
  <dd>
    <p>.. py:attribute:: expression</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Information ###

<dl>
  <dt>    .. py : attribute :  : title</dt>
  <dd>
    <p>.. py:attribute:: title</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: description</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: metadata</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: min_version</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: max_version</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: advanced</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: plugin</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### KeyWordDescription ###

<dl>
  <dt>    .. py : attribute :  : parameter</dt>
  <dd>
    <p>.. py:attribute:: parameter</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: context</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: key</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: short_description</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: long_description</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### ParameterDetail ###

<dl>
  <dt>    .. py : attribute :  : name</dt>
  <dd>
    <p>.. py:attribute:: name</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: default_value</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: required</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: repeatable</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: content_type</p>
    <p></p>
    <p>A **optional** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: short_description</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: long_description</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: keyword</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### ParameterDetails ###

<dl>
  <dt>    .. py : attribute :  : parameter</dt>
  <dd>
    <p>.. py:attribute:: parameter</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Schedule ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: cron</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: interval</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## RegistryRequestMessage ##

<dl>
  <dt>    .. py : attribute :  : header</dt>
  <dd>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.RegistryRequestMessage.Request`</p>
  </dd>
</dl>
### Request ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: registration</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: inventory</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: control</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.RegistryRequestMessage.Request.Registration`</p>
    <p>* :py:class:`Plugin.RegistryRequestMessage.Request.Inventory`</p>
    <p>* :py:class:`Plugin.RegistryRequestMessage.Request.Control`</p>
  </dd>
</dl>
### Registration ###

<dl>
  <dt>    .. py : attribute :  : plugin_id</dt>
  <dd>
    <p>.. py:attribute:: plugin_id</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: name</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: info</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: unregister</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: alias</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: schedule</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Inventory ###

<dl>
  <dt>    .. py : attribute :  : plugin</dt>
  <dd>
    <p>.. py:attribute:: plugin</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **repeated** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: name</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: fetch_all</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: fetch_information</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Control ###

<dl>
  <dt>    .. py : attribute :  : command</dt>
  <dd>
    <p>.. py:attribute:: command</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: name</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: alias</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## RegistryResponseMessage ##

<dl>
  <dt>    .. py : attribute :  : header</dt>
  <dd>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.RegistryResponseMessage.Response`</p>
  </dd>
</dl>
### Response ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: result</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: registration</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: inventory</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: control</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.RegistryResponseMessage.Response.Registration`</p>
    <p>* :py:class:`Plugin.RegistryResponseMessage.Response.Inventory`</p>
    <p>* :py:class:`Plugin.RegistryResponseMessage.Response.Control`</p>
  </dd>
</dl>
### Registration ###

<dl>
  <dt>    .. py : attribute :  : item_id</dt>
  <dd>
    <p>.. py:attribute:: item_id</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Inventory ###

<dl>
  <dt>    .. py : attribute :  : plugin</dt>
  <dd>
    <p>.. py:attribute:: plugin</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: name</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: info</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: parameters</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: schedule</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Control ###

***************************
#### ScheduleNotificationMessage ####

<dl>
  <dt>    .. py : attribute :  : header</dt>
  <dd>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.ScheduleNotificationMessage.Request`</p>
  </dd>
</dl>
### Request ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: plugin_id</p>
    <p></p>
    <p>A **required** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: info</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: schedule</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## Settings ##

<dl>
  <dt>    Settings is an internal message.</dt>
  <dd>
    <p>Settings is an internal message.</p>
    <p>It is not used to submit checks or query status instead it is used to interact with the settings store.</p>
    <p>The settings is a central component inside NSClient++ and this is the way to interact with it.</p>
    <p>.. py:attribute:: Command</p>
    <p></p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>LOAD                      1</p>
    <p>SAVE                      2</p>
    <p>RELOAD                    3</p>
    <p>========================= =====</p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.Settings.Node`</p>
    <p>* :py:class:`Plugin.Settings.Query`</p>
    <p>* :py:class:`Plugin.Settings.Information`</p>
  </dd>
</dl>
### Node ###

<dl>
  <dt>    .. py : attribute :  : path</dt>
  <dd>
    <p>.. py:attribute:: path</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: key</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Query ###

<dl>
  <dt>    .. py : attribute :  : expression</dt>
  <dd>
    <p>.. py:attribute:: expression</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Information ###

<dl>
  <dt>    .. py : attribute :  : title</dt>
  <dd>
    <p>.. py:attribute:: title</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: description</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: default_value</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: min_version</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: max_version</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: advanced</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: sample</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: sample_usage</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: plugin</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## SettingsRequestMessage ##

<dl>
  <dt>    .. py : attribute :  : header</dt>
  <dd>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.SettingsRequestMessage.Request`</p>
  </dd>
</dl>
### Request ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: plugin_id</p>
    <p></p>
    <p>A **required** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: registration</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: query</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: update</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: inventory</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: control</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: status</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.SettingsRequestMessage.Request.Registration`</p>
    <p>* :py:class:`Plugin.SettingsRequestMessage.Request.Query`</p>
    <p>* :py:class:`Plugin.SettingsRequestMessage.Request.Update`</p>
    <p>* :py:class:`Plugin.SettingsRequestMessage.Request.Inventory`</p>
    <p>* :py:class:`Plugin.SettingsRequestMessage.Request.Control`</p>
    <p>* :py:class:`Plugin.SettingsRequestMessage.Request.Status`</p>
  </dd>
</dl>
### Registration ###

<dl>
  <dt>    .. py : attribute :  : node</dt>
  <dd>
    <p>.. py:attribute:: node</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: info</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Query ###

<dl>
  <dt>    .. py : attribute :  : node</dt>
  <dd>
    <p>.. py:attribute:: node</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: query</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: recursive</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **optional** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: default_value</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Update ###

<dl>
  <dt>    .. py : attribute :  : node</dt>
  <dd>
    <p>.. py:attribute:: node</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: value</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Inventory ###

<dl>
  <dt>    .. py : attribute :  : plugin</dt>
  <dd>
    <p>.. py:attribute:: plugin</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: node</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: query</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: recursive_fetch</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: fetch_keys</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: fetch_paths</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: fetch_samples</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: descriptions</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Control ###

<dl>
  <dt>    .. py : attribute :  : command</dt>
  <dd>
    <p>.. py:attribute:: command</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: context</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Status ###

***********************
#### SettingsResponseMessage ####

<dl>
  <dt>    .. py : attribute :  : header</dt>
  <dd>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: payload</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.SettingsResponseMessage.Response`</p>
  </dd>
</dl>
### Response ###

<dl>
  <dt>    .. py : attribute :  : id</dt>
  <dd>
    <p>.. py:attribute:: id</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: result</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: registration</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: query</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: update</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: inventory</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: control</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: status</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.SettingsResponseMessage.Response.Registration`</p>
    <p>* :py:class:`Plugin.SettingsResponseMessage.Response.Query`</p>
    <p>* :py:class:`Plugin.SettingsResponseMessage.Response.Update`</p>
    <p>* :py:class:`Plugin.SettingsResponseMessage.Response.Inventory`</p>
    <p>* :py:class:`Plugin.SettingsResponseMessage.Response.Control`</p>
    <p>* :py:class:`Plugin.SettingsResponseMessage.Response.Status`</p>
  </dd>
</dl>
### Registration ###

Query
---

<dl>
  <dt>    .. py : attribute :  : node</dt>
  <dd>
    <p>.. py:attribute:: node</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: value</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Update ###

Inventory
---

<dl>
  <dt>    .. py : attribute :  : node</dt>
  <dd>
    <p>.. py:attribute:: node</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: info</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: value</p>
    <p></p>
    <p>A **optional** value of type **message**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
### Control ###

Status
---

<dl>
  <dt>    .. py : attribute :  : context</dt>
  <dd>
    <p>.. py:attribute:: context</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: has_changed</p>
    <p></p>
    <p>A **optional** value of type **bool**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## LogEntry ##

<dl>
  <dt>    LogEntry is used to log status information.</dt>
  <dd>
    <p>LogEntry is used to log status information.</p>
    <p>.. py:attribute:: entry</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`Plugin.LogEntry.Entry`</p>
  </dd>
</dl>
### Entry ###

<dl>
  <dt>    .. py : attribute :  : Level</dt>
  <dd>
    <p>.. py:attribute:: Level</p>
    <p></p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>LOG_DEBUG                 500</p>
    <p>LOG_INFO                  150</p>
    <p>LOG_WARNING               50</p>
    <p>LOG_ERROR                 10</p>
    <p>LOG_CRITICAL              1</p>
    <p>========================= =====</p>
    <p>.. py:attribute:: level</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: sender</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: file</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: line</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: message</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: date</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
