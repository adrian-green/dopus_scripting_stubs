/**
 * This object is available to all scripts. It provides various helper methods, and collections that let you access things like Listers and toolbars.
 */
class DOpus {
	/**
	 * <p>The&nbsp;<!--?xml:namespace prefix = "c1" /-->{@link Aliases} object gives the script
	 *       access to the defined <a href="../Aliases.htm">folder
	 *     aliases</a>.<br></p>
	 * @returns {Aliases}
	 */

	aliases;
	/**
	 * <p>Returns a collection of  {@link Format}&nbsp;objects representing
	 *       the used-defined favorite formats.</p>
	 * @returns {Format[]}
	 */

	favoriteformats;
	/**
	 * <p>Returns a {@link Favorite} object which lets you query and modify the user-defined
	 *       favorite folders.</p>
	 * @returns {Favorites}
	 */

	favorites;
	/**
	 * <p>Returns a  {@link FiletypeGroups}&nbsp;object
	 *       which lets you enumerate and query the configured <a href="../Groups.htm">file type groups</a>.</p>
	 * @returns {FiletypeGroups}
	 */

	filetypegroups;
	/**
	 * <p>Returns a  {@link GlobalFilters}&nbsp;object
	 *       which lets you access information about the global filter settings
	 *       (configured on the  <a href="../Prefs/Global_Filters.htm"><strong>Folders / Global
	 *       Filters</strong></a>&nbsp;page in Preferences).</p>
	 * @returns {GlobalFilters}
	 */

	filters;
	/**
	 * <p>Returns a string representing the current user interface
	 *     language.</p>
	 * @returns {string}
	 */

	language;
	/**
	 * <p>Returns a  {@link Listers}&nbsp;object which
	 *       represents any currently open Lister windows (each one is represented by a
	 *  {@link Lister}&nbsp;object).<br></p>
	 * @returns {Listers}
	 */

	listers;
	/**
	 * <p>Returns a  {@link SmartFavorites} object
	 *       which lets you query the   <a href="../SmartFavorites.htm">SmartFavorites </a>data.</p>
	 * @returns {SmartFavorites}
	 */

	smartfavorites;
	/**
	 * <p>Returns a  {@link ScriptStrings}&nbsp;object
	 *       which lets your script access any strings defined as <a href="String_Resources1.htm">string resources</a>.</p>
	 * @returns {ScriptStrings}
	 */

	strings;
	/**
	 * <p>Returns a  {@link TabGroups}&nbsp;object which lets
	 *       your script access and manipulate the configured <a href="../Tab_Groups1.htm">folder tab groups</a>.</p>
	 * @returns {TabGroups}
	 */

	tabgroups;
	/**
	 * <p>This {@link Vars}&nbsp;object
	 *       represents all defined variables with <em>global scope</em>.</p>
	 * @returns {Vars}
	 */

	vars;
	/**
	 * <p>The {@link Version}&nbsp;object
	 *       provides information about the current Opus program version.</p>
	 * @returns {Version}
	 */

	version;
	/**
	 * <p>Returns a {@link Viewers} object which represents any
	 *       currently open <a href="../Viewing_Images.htm">standalone image
	 *       viewers</a> (each one is represented by a <a href="Viewer11.htm"><b>Viewer</b></a> object).</p>
	 * @returns {Viewers}
	 */

	viewers;
	/**
	 * <p>Clears the script output log.</p>
	 *
	 */
	ClearOutput(){}
	/**
	 * <p>Creates and returns a new  {@link DOpusFactory}&nbsp;object,
	 *       which can be used to create various lightweight helper objects like <!--?xml:namespace prefix = "c1" /-->{@link Vector}.</p>
	 * @returns {DOpusFactory}
	 */
	Create(){}
	/**
	 * <p>Delays for the specified number of milliseconds before
	 *   returning.</p>
	 * @param {int} time
	 *
	 */
	Delay(time){}
	/**
	 * <p>Creates a new {@link Dialog} object,
	 *       that lets you display dialogs and popup menus.</p>
	 *       <p><strong>Note:</strong> Scripts should not usually use this when
	 *       responding to events triggered by toolbars or folder tabs. The
	 *       <strong>Dialog</strong> returned by <strong>DOpus.Dlg</strong> will not
	 *       have its parent window configured. Most scripting events provide you an
	 *       object which can either create a pre-configured <strong>Dialog</strong> or
	 *       which includes a <strong>SourceTab</strong> property or similar which can
	 *       do the same. In almost all situations you should use those
	 *   instead.</p>
	 * @returns {Dialog}
	 */
	Dlg(){}
	/**
	 * <p>Creates the  {@link DPI}&nbsp;helper object which assists
	 *       when dealing with different system scaling settings (e.g. high-DPI
	 *       monitors).</p>
	 * @returns {DPI}
	 */
	DPI(){}
	/**
	 * <p>Creates a new  {@link FSUtil}&nbsp;object, that provides
	 *       helper methods for accessing the file system.</p>
	 * @returns {FSUtil}
	 */
	FSUtil(){}
	/**
	 * <p>Retrieves the current contents of the system clipboard, if it contains
	 *       either text or files.<br><br>You can control the returned type by passing
	 *       either "<strong>text</strong>" or "<strong>files</strong>" for the
	 *       <em>&lt;type&gt;</em> argument - Opus will convert to the requested type
	 *       if possible.<br><br>If <em>&lt;type&gt;</em> is not specified the contents
	 *       will be returned in their native format.</p>
	 * @param {none|string} none_or_type
	 * @returns {string|Item[]}
	 */
	GetClip(none_or_type){}
	/**
	 * <p>Returns a string indicating the native format of the clipboard contents
	 *       - "<strong>text</strong>", "<strong>files</strong>" or an empty string in
	 *       any other case.</p>
	 * @returns {string}
	 */
	GetClipFormat(){}
	/**
	 * <p>Returns a string indicating which qualifier keys are currently held
	 *       down. If none are held down, the string will be "<strong>none</strong>".
	 *       Otherwise, the string can contain any or all of the following, separated
	 *       by commas: "<strong>shift</strong>", "<strong>ctrl</strong>",
	 *       "<strong>alt</strong>", "<strong>lwin</strong>",
	 *       "<strong>rwin</strong>".</p>
	 *       <p>Note that many events pass you a similar list of qualifiers. If you are
	 *       passed a list of qualifiers, you should generally use that list rather
	 *       than call DOpus.GetQualifiers.</p>
	 *       <p>For example, script commands are passed a {@link Func} object with a
	 *       <em>qualifiers</em> property. That property will tell you which keys were
	 *       held down when the command was triggered, and that may be different to the
	 *       keys held down a few seconds later. When the user clicks a button to run a
	 *       command, they normally expect the command to use the keys they held when
	 *       they clicked, not the keys they are touching later while waiting for it to
	 *       finish.</p>
	 *       <p>Similarly, events like {@link OnBeforeFolderChange}
	 *       will often pass you an object like {@link BeforeFolderChangeData}
	 *       containing a <em>qualifiers</em> property which indicates key state when
	 *       the event was triggered. You should normally use that instead of calling
	 *       DOpus.GetQualifiers.</p>
	 *       <p>If you do call DOpus.GetQualifiers, you would normally want to call it
	 *       as soon as possible and then store the result, so there is less time for
	 *       the user to let go of a key after triggering your script.</p>
	 *       <p>If you call DOpus.GetQualifiers more than once, you may get a different
	 *       result each time, due to keys being pushed or released between calls. Call
	 *       it once and store the result if you need to do multiple checks and need
	 *       them to be consistent. This does not generally affect the
	 *       <em>qualifiers</em> properties mentioned earlier, since they are usually
	 *       stored snapshots of the key state.</p>
	 * @returns {string}
	 */
	GetQualifiers(){}
	/**
	 * <p>Loads an image file from the specified external file. You can
	 *       optionally specify the desired size to load the image at, and whether the
	 *       alpha channel (if any) should be loaded or not.</p>
	 *       <p>&nbsp;</p>
	 *       <p>You can&nbsp;also provide a {@link Blob} object containing the image data
	 *       instead of a filename.&nbsp;<br>&nbsp;</p>
	 *       <p>The returned  {@link Image}&nbsp;object can be&nbsp;given
	 *       as the value&nbsp;of the <strong><a href="Control.htm">Control</a>.label</strong> property for a static
	 *       control in a <a href="Script_Dialogs1.htm">script dialog</a> (when that
	 *       control is in "image" mode). You can also assign&nbsp;as to the
	 *       <strong>icon </strong>property of a <strong><a href="Dialog.htm">Dialog</a> </strong>object to specify a custom window
	 *       icon for your script dialog.</p>
	 * @param {string|object} filename_or_Blob
	 * @param {int} [width]
	 * @param {int} [height]
	 * @param {boolean} [alpha]
	 * @returns {Image}
	 */
	LoadImage(filename_or_Blob, width, height, alpha){}
	/**
	 * <p>Extracts a thumbnail from the specified external file. You can
	 *       optionally specify a timeout (in milliseconds)&nbsp;and the desired size
	 *       to load the thumbnail at.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The optional <strong>flags </strong>value supports the following flags
	 *       (supplied as a string):</p>
	 *       <p>&nbsp;</p>
	 *       <blockquote>
	 *         <p><strong>i</strong> - prevents Opus from waiting for thumbnails that
	 *         may take some time to generate, and instead returns a large icon if the
	 *         thumbnail can't be generated immediately.</p>
	 *         <p><strong>c</strong> -&nbsp;modifies the <strong>i</strong> flag to
	 *         only apply to Cloud storage folders.<br>&nbsp;</p></blockquote>
	 *       <p>If loading fails (or the timeout expires before the
	 *       thumbnail&nbsp;could be generated) this method returns
	 *       <strong>False</strong>.<br>&nbsp;</p>
	 *       <p>The returned  {@link Image}&nbsp;object can be&nbsp;given
	 *       as the value&nbsp;of the <strong><a href="Control.htm">Control</a>.label</strong> property for a static
	 *       control in a <a href="Script_Dialogs1.htm">script dialog</a> (when that
	 *       control is in "image" mode). You can also assign&nbsp;as to the
	 *       <strong>icon </strong>property of a <strong><a href="Dialog.htm">Dialog</a> </strong>object to specify a custom window
	 *       icon for your script dialog.</p>
	 * @param {string} filename
	 * @param {int} [timeout]
	 * @param {int} [width]
	 * @param {int} [height]
	 * @param {string} [flags]
	 * @returns {Image|boolean}
	 */
	LoadThumbnail(filename, timeout, width, height, flags){}
	/**
	 * <p>Prints the specified text string to the script output log (found in the
	 *       <a href="../Utility_Panel.htm">Utility Panel,&nbsp;</a> the <a href="../CLI.htm">CLI</a> in script mode, the <em>Rename</em> dialog and
	 *       the <em>Command Editor</em> in script mode).<br><br>If the
	 *       second&nbsp;argument is provided and set to <strong>True</strong>, the
	 *       message will be displayed as an error. This means the text will be
	 *       displayed in red and if no log windows are currently open, a warning icon
	 *       will flash in the Lister status bar to alert the user of an error
	 *       condition.</p>
	 *       <p>&nbsp;</p>
	 *       <p>If the optional third argument is provided and set to
	 *       <strong>True</strong> then the log message will have a timestamp prepended
	 *       to it. Timestamps only appear in the utility panel, not in places like
	 *       the&nbsp;Command Editor's output panel. Error messages always get
	 *       timestamps so if the second argument is <strong>True</strong> then the
	 *       third is ignored</p>
	 * @param {string} text
	 * @param {boolean} [error]
	 * @param {boolean} [timestamp]
	 *
	 */
	Output(text, error, timestamp){}
	/**
	 * <p>Causes Opus to reload and reinitialize the specified&nbsp;script. You
	 *       must provide the full pathname of the script on disk (if a script add-in
	 *       wants to reload itself you can pass the value of the <strong><a href="Script.htm">Script</a>.file</strong> property).</p>
	 * @param {string} file
	 *
	 */
	ReloadScript(file){}
	/**
	 * <p>Places the specified text, or  <!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;objects) on the system
	 *       clipboard. If called with no arguments the clipboard will be
	 *     cleared.</p>
	 * @param {string|collection:Item|none} text_or_item_or_none
	 *
	 */
	SetClip(text_or_item_or_none){}
	/**
	 * <p>Returns a <!--?xml:namespace prefix = "c1" /-->{@link Toolbars}&nbsp;object which lets
	 *       you enumerate&nbsp;all defined toolbars (whether they are currently open
	 *       or not).</p>
	 *       <p>&nbsp;</p>
	 *       <p>You can restrict this object to only return in-use toolbars by
	 *       specifying the optional <em>type</em> parameter - specify
	 *       <strong>"listers"</strong> to only return toolbars currently turned on in
	 *       a Lister, and <strong>"docks"</strong> to only return toolbars that are
	 *       currently floating.</p>
	 * @param {string} type
	 * @returns {Toolbars}
	 */
	Toolbars(type){}
	/**
	 * <p>Returns a string indicating the type of an object or
	 *   variable.</p>
	 * @param {any} data
	 * @returns {string}
	 */
	TypeOf(data){}
} //end class
