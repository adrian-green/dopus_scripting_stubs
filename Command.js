/**
 *This object is used to run Opus commands. It is obtained from the ScriptCommandData.func or ClickData.func properties, and can also be created by the DOpusFactory.Command method.
 */
class Command {
	/**
	 * <p>Set this property to <strong>False</strong> to prevent files used by
	 *       this command from being deselected, and <strong>True</strong> to deselect
	 *       them once the function is finished. Note that files will only be
	 *       deselected if they came from a {@link Tab}
	 *       object, and only then if the command is successful.</p>
	 * @returns {boolean}
	 */

	deselect;
	/**
	 * <p>Returns a  {@link Path}&nbsp;object that represents the
	 *       destination folder of this command. If a destination tab is set, this will
	 *       be the path in the tab. You can not set this property directly - instead,
	 *       use either the <strong>SetDest</strong> or <strong>SetDestTab</strong>
	 *       methods to change the destination folder.</p>
	 * @returns {Path}
	 */

	dest;
	/**
	 * <p>Returns a  {@link Tab}&nbsp;object that represents the
	 *       destination tab for this command (if it has one - not all commands require
	 *       a destination). You can not set this property directly - instead,
	 *       use&nbsp;the <strong>SetDestTab</strong> method to change the destination
	 *       tab.</p>
	 * @returns {Tab}
	 */

	desttab;
	/**
	 * <p>Returns the number of items in the <strong>files</strong>
	 *       collection.</p>
	 * @returns {int}
	 */

	filecount;
	/**
	 * <p>Returns a collection of all  {@link Item}&nbsp;objects that represent the
	 *       files and folders this command is to act upon. You can not modify this
	 *       collection directly - instead you can use the various methods
	 *       (<strong>ClearFiles</strong>, <strong>SetFiles</strong>,
	 *       <strong>AddFile</strong>, <strong>RemoveFile</strong>, etc.) to modify the
	 *       list of items to act upon.</p>
	 * @returns {Item[]}
	 */

	files;
	/**
	 * <p>Returns the number of instruction lines added to the command.</p>
	 * @returns {int}
	 */

	linecount;
	/**
	 * <p>Returns a  {@link Progress}&nbsp;object that you can
	 *       use to display a progress indicator to the user.</p>
	 * @returns {Progress}
	 */

	progress;
	/**
	 * <p>After every command that is run with this object, a
	 *       <strong>Results</strong> object is available from this property. This
	 *       provides information about the outcome of the command.</p>
	 * @returns {Results}
	 */

	results;
	/**
	 * <p>Returns a   {@link Path}&nbsp;object that represents
	 *       the&nbsp;source folder of this command. If a source tab is set, this will
	 *       be the path in the tab. You can not set this property directly - instead,
	 *       use either the <strong>SetSource </strong>or <strong>SetSourceTab</strong>
	 *       methods to change the source folder.</p>
	 * @returns {Path}
	 */

	source;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link Tab}&nbsp;object that represents
	 *       the&nbsp;source tab for this command. You can not set this property
	 *       directly - instead, use&nbsp;the <strong>SetSourceTab</strong> method to
	 *       change the source tab.</p>
	 * @returns {Tab}
	 */

	sourcetab;
	/**
	 * <p>This <!--?xml:namespace prefix = "c1" /-->{@link Vars}&nbsp;object represents all
	 *       defined variables with&nbsp;<em>command scope </em>(that are scoped to
	 *       this function - e.g. that were set using the <strong>@set</strong>
	 *       directive).</p>
	 * @returns {Vars}
	 */

	vars;
	/**
	 * <p>Adds the specified item to the collection of items this command is to
	 *       act upon. You can pass the item's path as either a <em>string</em> or a <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;object, and you can also
	 *       pass an <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;object
	 *       directly.<br><br>This method returns the total number of items in the
	 *       collection.</p>
	 * @param {string|Path|Item} path_or_path_or_item
	 * @param {Item} item
	 * @returns {int}
	 */
	AddFile(path_or_path_or_item, item){}
	/**
	 * <p>Adds the items in the specified collection to the list of items this
	 *       command is to act upon. The return value is the new number of items in the
	 *       collection.<br><br>You can also pass a {@link Path} objects, or of strings (full
	 *       paths), instead of a collection.</p>
	 * @param {collection:Item|Vector:Item|Vector:Path|Vector:string} item_or_item_or_path_or_string
	 * @returns {int}
	 */
	AddFiles(item_or_item_or_path_or_string){}
	/**
	 * <p>Adds the contents of the clipboard to the collection of items this
	 *       command is to act upon. This method supports both files and file paths
	 *       copied to the clipboard as text. The return value is the new number of
	 *       items in the collection.</p>
	 * @returns {int}
	 */
	AddFilesFromClipboard(){}
	/**
	 * <p>Reads file paths from the contents of the specified file and adds them
	 *       to the item collection. You can provide the file's path as either a
	 *       <em>string </em>or<em> </em>a<em> </em><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;object. The file must
	 *       consist of one absolute path per line.</p>
	 *       <p>The encoding of the file is assumed to be ANSI, unless it has a BOM
	 *       (byte-order-mark) at the start,&nbsp;or you specify the <em>encoding</em>
	 *       argument. If you specify the encoding this must be a <em>string </em>equal
	 *       to one of the following: <em>utf16be</em>, <em>utf16le</em>,
	 *       <em>utf8</em>, <em>ansi</em> or <em>cp:XXXX</em> where <em>XXXX</em>
	 *       specifies the code page number).&nbsp;</p>
	 *       <p>The return value is the new number of items in the
	 * collection.</p>
	 * @param {string} path
	 * @param {string} encoding
	 * @returns {int}
	 */
	AddFilesFromFile(path, encoding){}
	/**
	 * <p>Adds the contents of the specified folder to the collection of items
	 *       this command is to act upon. You can pass the folder's path as either a
	 *       <em>string </em>or a <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;object. You can also append
	 *       a <a href="../Pattern_Matching_Syntax.htm">wildcard pattern</a> to the
	 *       path to only add files matching the specified pattern.</p>
	 * @param {string} path
	 * @returns {int}
	 */
	AddFilesFromFolder(path){}
	/**
	 * <p>Adds the specified instruction line to the command that this object
	 *       will run. The <strong>AddLine</strong> method lets you build up
	 *       complicated multiple line commands - add each line in turn and then run
	 *       the command using the <strong>Run</strong> method. For a single line
	 *       command it is simpler to use the <strong>RunCommand</strong>
	 *   method.</p>
	 * @param {string} instruction
	 *
	 */
	AddLine(instruction){}
	/**
	 * <p>Clears all instruction lines from the command.</p>
	 *
	 */
	Clear(){}
	/**
	 * <p>Clears the failure flags from the <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;collection. Any items that
	 *       fail when a command is run will have their
	 *       <strong>failed</strong>&nbsp;property set to <strong>True</strong>, and
	 *       once this has happened the file will be skipped over by any subsequent
	 *       commands. You can call this method to reset all the failure
	 *   flags.</p>
	 *
	 */
	ClearFailed(){}
	/**
	 * <p>Clears the collection of items this command is to act upon.</p>
	 *
	 */
	ClearFiles(){}
	/**
	 * <p>Clears any modifiers that have been set for this command. The supported
	 *       modifiers are a subset of the full list of <a href="../Command_modifier_reference.htm">command modifiers</a> - see the
	 *       <strong>SetModifier</strong> method for a list of these. You can also pass
	 *       * to clear all modifiers that have been set.</p>
	 * @param {string} modifier
	 *
	 */
	ClearModifier(modifier){}
	/**
	 * <p>Returns a  {@link StringSet}&nbsp;containing the
	 *       names of all the Opus commands. You can optionally filter this set by
	 *       providing one or more of the following flags as an argument to the
	 *       <strong>CommandList </strong>method:<br><br><em>i</em> - internal
	 *       (built-in) commands<br><em>s</em> - script commands<br><em>u</em> - user
	 *       commands<br></p>
	 * @param {none|string} none_or_types
	 * @returns {StringSet}
	 */
	CommandList(none_or_types){}
	/**
	 * <p>Creates a new <!--?xml:namespace prefix = "c1" /-->{@link Dialog} object, that lets you
	 *       display dialogs and popup menus. The dialog's <strong>window</strong>
	 *       property will be automatically assigned to the source tab.</p>
	 * @returns {Dialog}
	 */
	Dlg(){}
	/**
	 * <p>Returns a {@link Map}of the modifiers
	 *       that have been set for this command (either by the <strong>SetModifier
	 *       </strong>method, or in the case of <a href="Script_Addins.htm">script
	 *       add-ins</a> any modifiers that were set on the button that invoked the
	 *       script).</p>
	 * @returns {Map}
	 */
	GetModifiers(){}
	/**
	 * <p>Returns <strong>True</strong> if the specified {@link Set} command condition is true. This
	 *       is the equivalent of the <strong>@ifset </strong><a href="../Command_modifier_reference.htm">command modifiers.</a> The
	 *       optional second parameter lets you test a condition based on a command
	 *       other than <strong>Set</strong>&nbsp;- for example,
	 *       <strong>IsSet("VIEWERCMD=mark", "Show")</strong> in the viewer to test if
	 *       the current image is marked.</p>
	 * @param {string} condition
	 * @param {string} [command]
	 * @returns {boolean}
	 */
	IsSet(condition, command){}
	/**
	 * <p>Removes the specified file from the <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;collection. You can pass
	 *       the file's path as either a <em>string</em> or a <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;object. You can also pass
	 *       the <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;itself, or its index
	 *       (starting from 0) within the collection. The return value is the new
	 *       number of items in the collection.</p>
	 * @param {string|Path|Item|int} path_or_path_or_item_or_index
	 * @param {or
      } or
	 * @param {int} index
	 * @returns {int}
	 */
	RemoveFile(path_or_path_or_item_or_index, or, index){}
	/**
	 * <p>Runs the command that has been built up with this object. The
	 *       return&nbsp;value indicates whether or not the command ran successfully.
	 *       Zero indicates the command could not be run or was aborted; any other
	 *       number indicates the command was run for at least some files. (Note that
	 *       this is not the "exit code" for external commands. For external commands
	 *       it only indicates whether or not Opus launched the command. If you need
	 *       the exit code of an external command, use the WScript.Shell Run or Exec
	 *       methods to run the command.) You can use the <strong>Results</strong>
	 *       property to find out more information about the results of the command,
	 *       and also discover which files (if any) failed using the
	 *       <strong>failed</strong> property of each <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;in the
	 *       <strong>files</strong> collection.</p>
	 * @returns {int}
	 */
	Run(){}
	/**
	 * <p>Runs the single line command given by the <em>instruction</em>
	 *       argument. Calling this method is the equivalent of adding the single line
	 *       with the <strong>AddLine </strong>method and then calling the <strong>Run
	 *       </strong>method. </p>
	 * @param {string} instruction
	 * @returns {int}
	 */
	RunCommand(instruction){}
	/**
	 * <p>Sets the command's destination to the specified path. You can provide
	 *       the path as either a <em>string</em> or<em> </em>a<em> </em><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;object. Calling this method
	 *       clears the destination tab property from the command.</p>
	 * @param {string} path
	 *
	 */
	SetDest(path){}
	/**
	 * <p>Sets the command's destination to the specified tab. The destination
	 *       path will be initialized from the tab automatically (so you don't need to
	 *       call <strong>SetDest</strong> as well as
	 *     <strong>SetDestTab</strong>).</p>
	 * @param {Tab} tab
	 *
	 */
	SetDestTab(tab){}
	/**
	 * <p>Configures the command to use the files in the specified <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Item}collection as the items the
	 *       command will act upon.<br><br>You can also pass a  {@link Item}&nbsp;objects instead of a
	 *       collection.</p>
	 * @param {collection:Item} item
	 *
	 */
	SetFiles(item){}
	/**
	 * <p>Turns on a modifier for this command. The supported modifiers are a
	 *       subset of the full list of  <a href="../Command_modifier_reference.htm">command modifiers</a>:</p>
	 *       <p><em>admin</em>, <em>async</em>, <em>codepage</em>,
	 *       <em>externalonly</em>, <em>leavedoswindowopen</em>, <em>nodeselect</em>,
	 *       <em>noexpandenv</em>, <em>nofilenamequoting</em>,
	 *       <em>nolocalizefiles</em>, <em>noprogress</em>, <em>norunbatch</em>,
	 *       <em>resolvelinks</em>, <em>runmode</em></p>
	 *       <p><br>Using this method is the equivalent of using the
	 *       <strong>AddLine</strong> method to add the modifier to the command as an
	 *       instruction; e.g. <em>Command.SetModifier("async") </em>is the same as
	 *       <em>Command.AddLine("@async")</em>. If the modifier requires a value it is
	 *       passed as the second argument, e.g. <em>Command.SetModifier("runmode",
	 *       "hide")</em>.</p>
	 * @param {string} modifier
	 * @param {string} value
	 *
	 */
	SetModifier(modifier, value){}
	/**
	 * <p>Lets you share the progress indicator from one command with another
	 *       command. You can pass this method the value of <strong>progress</strong>
	 *       property obtained from another <strong>Command </strong>object.</p>
	 * @param {Progress} progress
	 *
	 */
	SetProgress(progress){}
	/**
	 * <p>This method lets you control which qualifier keys the command run by
	 *       this object will consider to have been pressed when it was invoked. For
	 *       example, several internal commands change their behavior when certain
	 *       qualifier keys are held down - calling this method allows you to set which
	 *       keys they will see.<br><br>The <em>qualifiers</em> argument must consist
	 *       of one or more of the following strings (comma-separated): <em>none</em>,
	 *       <em>shift</em>, <em>ctrl</em>, <em>alt</em>, <em>lwin</em>, <em>rwin</em>,
	 *       <em>win</em>.</p>
	 * @param {string} qualifiers
	 *
	 */
	SetQualifiers(qualifiers){}
	/**
	 * <p>Sets the command's source to the specified path. You can provide the
	 *       path as either a <em>string</em> or a <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Path}&nbsp;object. Calling this method
	 *       clears the source tab property from the command.</p>
	 * @param {string} path
	 *
	 */
	SetSource(path){}
	/**
	 * <p>Sets the command's source to the specified tab. The source path will be
	 *       initialized from the tab automatically (so you don't need to call
	 *       <strong>SetSource</strong> as well as
	 *     <strong>SetSourceTab</strong>).</p>
	 * @param {Tab} tab
	 *
	 */
	SetSourceTab(tab){}
	/**
	 * <p>Sets the type of function that this command will run. This is
	 *       equivalent to the drop-down control in the <a href="../Advanced_Command_Editor.htm">Advanced Command Editor</a>. The
	 *       <em>type</em> argument must be one of the following strings: <em>std</em>,
	 *       <em>msdos</em>, <em>script, wsl</em>. Standard (<em>std</em>) is the
	 *       default if the type is not specifically set.</p>
	 * @param {string} type
	 *
	 */
	SetType(type){}
	/**
	 * <p>This method can be used to update the appearance of toolbar buttons
	 *       that use <strong><a href="../Command_modifier_reference.htm">@toggle:if</a> </strong>to set
	 *       their selection state based on the existence of a <em>global-</em>,
	 *       <em>tab-</em> or <em>Lister-scoped</em> variable. You would call this
	 *       method if you have changed such a variable from a script to force buttons
	 *       that use it to update their selection status.</p>
	 *
	 */
	UpdateToggle(){}
} //end class
