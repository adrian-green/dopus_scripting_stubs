/**
 *This object represents a script-defined internal command. It is obtained from the ScriptInitData.AddCommand method, while processing the OnInit event.
 */
class ScriptCommand {
	/**
	 * <p>Use this to set a description for the command, that is displayed in the
	 *       <a href="JavaScript:TL_673600.HHClick()">Customize</a> dialog when the
	 *       user selects the command from the <a href="../Commands_Tab.htm">Commands
	 *       tab</a>.</p>
	 * @returns {string}
	 */

	desc;
	/**
	 * <p>Set to <strong>True</strong> to hide this command from the drop-down
	 *       command list shown in the <a href="../Function_Editor.htm">command
	 *       editor</a>. This lets you add commands that can still be used in buttons
	 *       and hotkeys but won't clutter up the command list.</p>
	 * @returns {boolean}
	 */

	hide;
	/**
	 * <p>Use this property to assign a default icon to this command. You can
	 *       specify the name of an internal icon (if you want to specify an icon from
	 *       a particular set, use <em>setname:iconname - </em>use this if you have
	 *       bundled your script in a <a href="Script_Package.htm">script package</a>
	 *       with its own icon set) or the path of an external icon or image file.
	 *     </p>
	 * @returns {string}
	 */

	icon;
	/**
	 * <p>Use this to set a label for the command. This is displayed in the  <a href="../Commands_Tab.htm">Commands tab</a> of the  <a href="JavaScript:TL_673605.HHClick()">Customize</a> dialog (under the
	 *       <em>Script Commands</em> category), and will form the default label of the
	 *       button created if the user drags that command out to a toolbar.
	 *       <br>&nbsp;</p>
	 *       <p>The actual name of the command (used to invoke the command) is assigned
	 *       through the <strong>name</strong> property.</p>
	 * @returns {string}
	 */

	label;
	/**
	 * <p>This is the name of the method that Opus will call in your script when
	 *       the command is invoked. This would typically be set to <em>OnXXXXX
	 *       </em>where <em>XXXXX </em>is the name of the command, however any method
	 *       name can be used.<br><br>When the method is invoked it is passed a single
	 *       argument, a {@link ScriptCommandData}
	 *       object. Generically this method is referred to as  {@link OnScriptCommand}.</p>
	 * @returns {string}
	 */

	method;
	/**
	 * <p>This is the name of the command. This determines the name that will
	 *       invoke the command when it is used in buttons and hotkeys.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>This lets you specify an optional command line template for the
	 *       command. This is a string in the form
	 *       <em>ARGNAME1/MOD,ARGNAME2/MOD,ARGNAME3/MOD</em>, etc, where ARGNAME is the
	 *       name of the argument and /MOD are one or more <a href="../Argument_Types.htm">modifiers used to indicate the argument
	 *       type</a>. The command line template can&nbsp;specify as many arguments as
	 *       needed.<br><br>When your command is invoked and its  {@link OnScriptCommand}event is
	 *       triggered, any arguments supplied on the command line are parsed according
	 *       to this template and provided via the <strong><a href="ScriptCommandData.htm">ScriptCommandData</a>.<a href="Func.htm">func</a>.args</strong> property.</p>
	 * @returns {string}
	 */

	template;
} //end class
