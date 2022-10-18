/**
 *This object is provided to the OnInit method, which is called once to initialize each script in the Script Addins folder.
 */
class ScriptInitData {
	/**
	 * <p>Returns a  {@link ScriptConfig}&nbsp;object,
	 *       that the script can use to initialize its default configuration.
	 *       Properties added to the object in this method will be displayed to the
	 *       user in Preferences, allowing them to change their value and thus
	 *       configure the behavior of&nbsp;the script.</p>
	 * @returns {ScriptConfig}
	 */

	config;
	/**
	 * <p>This lets you assign descriptions for your script's configuration
	 *       options that are shown to the user in the editor dialog. To do this, set
	 *       this property to a&nbsp;{@link Map}&nbsp;created via the <strong><a href="DOpusFactory.htm">DOpusFactory</a>.Map </strong>method, filled with
	 *       name/description string pairs.</p>
	 * @returns {Map}
	 */

	config_desc;
	/**
	 * <p>This lets you organize your script's configuration options into groups
	 *       when shown to the user in the editor dialog. The group names are arbitrary
	 *       - configuration options with the same group name will appear grouped
	 *       together. Set this property to a&nbsp;<!--?xml:namespace prefix = "c1" /-->{@link Map}&nbsp;created via the <strong><a href="DOpusFactory.htm">DOpusFactory</a>.Map </strong>method, filled with
	 *       name/group string pairs.</p>
	 * @returns {Map}
	 */

	config_groups;
	/**
	 * <p>Lets the script specify a copyright message that is displayed to the
	 *       user in Preferences.</p>
	 * @returns {string}
	 */

	copyright;
	/**
	 * <p>Set this to <strong>True</strong> if the script should be enabled by
	 *       default, or <strong>False</strong> if it should be disabled by default.
	 *       The user can enable or disable scripts using Preferences - this simply
	 *       controls the default state.</p>
	 * @returns {boolean}
	 */

	default_enable;
	/**
	 * <p>Lets the script specify a description message that is displayed to the
	 *       user in Preferences.</p>
	 * @returns {string}
	 */

	desc;
	/**
	 * <p>Set this to <strong>True</strong> if your script implements the {@link OnDoubleClick} event and (for
	 *       performance reasons) you want to be called with only a path to the
	 *       double-clicked item rather than a full <strong><a href="Item.htm">Item</a>
	 *       </strong>object. See the  {@link OnDoubleClick} event
	 *       documentation for more details.</p>
	 * @returns {boolean}
	 */

	early_dblclk;
	/**
	 * <p>Returns the path and filename of this script.</p>
	 * @returns {string}
	 */

	file;
	/**
	 * <p>Lets you specify an arbitrary group for this script. If scripts specify
	 *       a group they will be displayed in that group in the list in
	 *       Preferences.</p>
	 * @returns {string}
	 */

	group;
	/**
	 * <p>Lets the script specify a string that will be prepended to any log
	 *       output it performs. If not set the name of the script is used by
	 *       default.</p>
	 * @returns {string}
	 */

	log_prefix;
	/**
	 * <p>Specifies the minimum Opus version required. If the current version is
	 *       less than the specified version the script will be disabled. You can
	 *       specify the major version only (e.g. <em>"11"</em>), a major and minor
	 *       version (e.g. <em>"11.3"</em>) or a specific beta version (e.g.
	 *       <em>"11.3.1"</em> for 11.3 Beta 1).</p>
	 * @returns {string}
	 */

	min_version;
	/**
	 * <p>Lets the script specify a display name for the script that is shown in
	 *       Preferences.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>The <strong>OnInit</strong> method is called in two different
	 *       circumstances - once during Opus startup, and again if the script is
	 *       installed or edited when Opus is already running. This property
	 *       will&nbsp;return&nbsp;<strong>True</strong> if the <strong>OnInit</strong>
	 *       method is being called during Opus startup, or <strong>False</strong> for
	 *       any other time. </p>
	 * @returns {boolean}
	 */

	startup;
	/**
	 * <p>Lets you provide a URL where the user can go to find out more about
	 *       your script (it's displayed to the user in Preferences).</p>
	 * @returns {string}
	 */

	url;
	/**
	 * <p>Returns a  {@link Vars}&nbsp;collection of user and
	 *       script-defined&nbsp;variables that are local to this script. These
	 *       variables are available to other methods in the script via the <strong><a href="Script.htm">Script</a>.vars</strong> property.</p>
	 * @returns {Vars}
	 */

	vars;
	/**
	 * <p>Lets the script specify a version number string that is displayed to
	 *       the user in Preferences.</p>
	 * @returns {string}
	 */

	version;
	/**
	 * <p>Adds a new information column to Opus. The returned  {@link ScriptColumn}&nbsp;object must
	 *       be properly initialized. A script add-in can add as many columns as it
	 *       likes, and these will be available in file displays, infotips and the
	 *       <strong><a href="../Advanced_Find.htm">Advanced Find</a></strong>
	 *       function.<br><br>Instead of adding columns in <strong>OnInit</strong>,
	 *       your script can implement the <strong><a href="OnAddColumns.htm">OnAddColumns</a> </strong>method. This is more
	 *       flexible as it allows you to access your script's configuration at the
	 *       time you add columns, and&nbsp;columns can be dynamically added and
	 *       removed while Opus is running. If  {@link OnAddColumns} is implemented
	 *       then this method is unavailable in <strong>OnInit</strong>.</p>
	 * @returns {ScriptColumn}
	 */
	AddColumn(){}
	/**
	 * <p>Adds a new internal command to Opus. The returned  {@link ScriptCommand}&nbsp;object
	 *       must be properly initialized. A script add-in can add as many internal
	 *       commands as it likes to the Opus internal command set.</p>
	 *       <p>&nbsp;</p>
	 *       <p>Instead of adding&nbsp;commands in <strong>OnInit</strong>, your script
	 *       can implement the <strong><a href="OnAddCommands.htm">OnAddCommands</a>
	 *       </strong>method. This is more flexible as it allows you to access your
	 *       script's configuration at the time you add commands, and commands can be
	 *       dynamically added and removed while Opus is running. If  {@link OnAddCommands} is implemented
	 *       then this method is unavailable in
	 *   <strong>OnInit</strong>.</p>
	 * @returns {ScriptCommand}
	 */
	AddCommand(){}
} //end class
