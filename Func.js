/**
 *This object is passed to a script function (via ClickData.func) or script-defined internal command (via ScriptCommandData.func). It provides information relating to the function invocation (source and destination tabs, arguments, etc).
 */
class Func {
	/**
	 * <p>Returns an  {@link Args}&nbsp;object that provides access
	 *       to any arguments given on the command line that invoked this script. This
	 *       is used when the script has added an <a href="Adding_a_new_Internal_Command.htm">internal command</a> to
	 *       Opus.&nbsp;A command line template can be provided when the command is
	 *       added, and any arguments the user provides on the command line for the
	 *       script command will be available via this object.<br>&nbsp;</p>
	 *       <p>For most use the <strong>argsmap</strong> property may be an easier way
	 *       to access your command's arguments.</p>
	 * @returns {Args}
	 */

	args;
	/**
	 * <p>Returns a  {@link Map}&nbsp;object that provides keyword
	 *       lookup for each of the arguments given on the command line. An argument
	 *       will only be present in the  {@link Map}&nbsp;if it was used on the command
	 *       line, so you can easily check which arguments are present using the  {@link Map}<strong>.exists()</strong>
	 *       method.</p>
	 * @returns {Map}
	 */

	argsmap;
	/**
	 * <p>This property returns a pre-filled  {@link Command}&nbsp;object that can be
	 *       used to run commands against the source and destination tabs. Using this
	 *       object is the equivalent of calling <strong><a href="DOpusFactory.htm">DOpusFactory</a>.Command</strong>&nbsp;and setting
	 *       the source and destination tabs manually.</p>
	 * @returns {Command}
	 */

	command;
	/**
	 * <p>This object represents the default destination tab for the
	 *     function.</p>
	 * @returns {Tab}
	 */

	desttab;
	/**
	 * <p>Returns <strong>True</strong> if the command was invoked via a
	 *       drag-and-drop operation.</p>
	 * @returns {boolean}
	 */

	fromdrop;
	/**
	 * <p>Returns <strong>True</strong> if the command was invoked via the
	 *       keyboard (i.e. via a hotkey rather than a button).</p>
	 * @returns {boolean}
	 */

	fromkey;
	/**
	 * <p>Returns a string indicating any qualifier keys that were held down by
	 *       the user when the command was invoked.</p>
	 *       <p>The string can contain any or all of the following: <em>shift,</em>
	 *       <em>ctrl</em>, <em>alt</em>, <em>lwin</em>, <em>rwin</em></p>
	 *       <p>If no qualifiers were down, the string will be: <em>none</em></p>
	 * @returns {string}
	 */

	qualifiers;
	/**
	 * <p>This object represents the default source tab for the
	 *   function.</p>
	 * @returns {Tab}
	 */

	sourcetab;
	/**
	 * <p>If this button was run from the <a href="../Viewing_Images.htm">standalone image viewer</a>, this object
	 *       represents the viewer window.</p>
	 * @returns {Viewer}
	 */

	viewer;
	/**
	 * <p>Creates a new {@link Dialog} object,
	 *       that lets you display dialogs and popup menus. The dialog's
	 *       <strong>window</strong> property will be automatically assigned to the
	 *       source tab.</p>
	 * @returns {Dialog}
	 */
	Dlg(){}
} //end class
