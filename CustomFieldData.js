/**
 *The CustomFieldData object is provided to a rename script via the GetNewNameData.custom property. It provides access to the value of any custom fields that your script added to the Rename dialog.
 */
class CustomFieldData {
	/**
	 * <p>The properties of the <strong>CustomFieldData </strong>object are
	 *       entirely determined by the script itself.<br><br>In the <strong><a href="OnGetCustomFields.htm">OnGetCustomFields</a> </strong>method, assign
	 *       the default values of any custom fields you want to the <strong><a href="GetCustomFieldData.htm">GetCustomFieldData</a>.fields</strong>
	 *       property. The type of each default value controls the type of the
	 *       property. </p>
	 *       <p><br>The <em>Rename</em> dialog only supports certain types of variables
	 *       for custom fields, so you must only assign properties of compatible
	 *       types.&nbsp;Supported types are:</p>
	 *       <p>&nbsp;</p>
	 *       <ul>
	 *         <li>Boolean options (<strong>True</strong>
	 *         or&nbsp;<strong>False</strong>) -&nbsp;the variable type must be
	 *         <em>bool</em>
	 *         </li><li>Numeric options - the variable type must be <em>int</em>
	 *         </li><li>String options - the variable type must be <em>string</em>
	 *         </li><li>Drop-down list - the variable type must be a {@link Vector} with an <em>int</em> as
	 *         the first element (to specify the default selection), and strings for
	 *         the remaining elements. </li></ul>
	 *       <p>&nbsp;</p>
	 * @returns {*}
	 */

	_custom_field_property;
} //end class
