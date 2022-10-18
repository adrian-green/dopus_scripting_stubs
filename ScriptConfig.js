/**
 *This object represents script-defined configuration data that Opus stores for each script. The configuration items are initialised via the ScriptInitData.config property, and are then available to the script via the Script.config property.
 */
class ScriptConfig {
	/**
	 * <p>The properties of the <strong>ScriptConfig </strong>object are entirely
	 *       determined by the script itself.<br><br>In the <strong>OnInit
	 *       </strong>method, assign the default values of any configuration properties
	 *       you want to this object. The type of each default value controls the type
	 *       of the property. </p>
	 *       <p><br>The Preferences page only supports editing certain types of
	 *       variables, so you must only assign properties of compatible
	 *       types.&nbsp;Preferences supports:</p>
	 *       <p>&nbsp;</p>
	 *       <ul>
	 *         <li>Boolean options (<strong>True</strong>
	 *         or&nbsp;<strong>False</strong>) -&nbsp;the variable type must be
	 *         <em>bool</em>
	 *         </li><li>Numeric options - the variable type must be <em>int</em>
	 *         </li><li>String options - the variable type must be <em>string</em>
	 *         </li><li>Multi-line string options - the variable type must be string and
	 *         must contain at least one <em>CR/LF</em> pair. Note that&nbsp;a trailing
	 *         <em>CR/LF</em> will be removed from the default value.
	 *         </li><li>Multiple string options - the variable type must be a {@link Vector} of <em>strings</em>
	 *         </li><li>Drop-down list - the variable type must be a {@link Vector} with an <em>int</em> as
	 *         the first element (to specify the default selection), and strings for
	 *         the remaining elements. </li></ul>
	 *       <p>&nbsp;</p>
	 * @returns {*}
	 */

	_configuration_property;
} //end class
