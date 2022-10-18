/**
 *This object represents a variable. Toolbar buttons, hotkeys and scripts can read and store variables, and variables can be saved from one session of Opus to another. The Var object is obtained from the Vars collection.
 */
class Var {
	/**
	 * <p>The default value of the <strong>Var</strong> object returns the value
	 *       of the variable itself, with one exception. If the <strong>Var</strong>
	 *       object is being accessed as part of an enumeration of the {@link Vars} collection, the default value
	 *       returns the variable name.<br><br>So for instance,</p>
	 *       <blockquote>
	 *         <p><br><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">For Each
	 *         Var in DOpus.Vars</span></p>
	 *         <blockquote>
	 *           <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">DOpus.Output("Variable
	 *           name = " &amp; Var)</span></p></blockquote></blockquote>
	 *       <blockquote>
	 *         <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">Next</span></p></blockquote>
	 *       <p>&nbsp;</p>
	 *       <p>Versus:</p>
	 *       <p>&nbsp;</p>
	 *       <blockquote>
	 *         <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">Set Var =
	 *         DOpus.Vars("myvar")</span></p></blockquote>
	 *       <blockquote>
	 *         <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">DOpus.Output("Variable
	 *         value = " &amp; Var)</span></p></blockquote>
	 *       <p>&nbsp;</p>
	 * @returns {*|string}
	 */

	_default_value
	/**
	 * <p>Returns the name of the variable. You cannot change the name of a
	 *       variable once it has been assigned - instead, delete the variable from its
	 *       collection and add a new one.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Returns <strong>True</strong> if the variable is persistent (saved) or
	 *       <strong>False</strong> if not. You can set this property to change the
	 *       persistence state.</p>
	 * @returns {boolean}
	 */

	persist;
	/**
	 * <p>Returns the value of the variable. You can set this property to change
	 *       the value of the variable.<br><br>You can store any type of variable in a
	 *       <strong>Var</strong> object, although not all types can be saved to disk.
	 *       If you want your variable to be persistent you should only use
	 *       <em>bool</em>, <em>int</em>, <em>string</em>, <em>date</em>,
	 *       <em>currency</em>&nbsp;or a  {@link Vector} of those
	 *   types.</p>
	 * @returns {*}
	 */

	value;

	/**
	 * <p>Deletes this variable from its parent
	 * collection.</p>
	 *
	 */
	Delete() {
	}
} //end class
