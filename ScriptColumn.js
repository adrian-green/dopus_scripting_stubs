/**
 *This object represents a script-defined column. It is obtained from the ScriptInitData.AddColumn method, while processing the OnInit event.
 */
class ScriptColumn {
	/**
	 * <p>If this is set to <strong>True</strong> (which is the default), and the
	 *       file display is <a href="../Sorting_and_Grouping.htm">grouped</a> by this
	 *       column, Opus will generate the groups automatically based on the column
	 *       value. If you set this to <strong>False</strong>, Opus will expect you to
	 *       provide grouping information in your  <!--?xml:namespace prefix = "c1" /--><a href="OnScriptColumn.htm"><strong>OnScriptColumn
	 *     </strong></a>function.</p>
	 * @returns {boolean}
	 */

	autogroup;
	/**
	 * <p>Set to <strong>True</strong> (or <strong>1</strong>) to force Opus to
	 *       update the value for this column when a file changes. You can also set
	 *       this value to <strong>2</strong> to force Opus to update the value when
	 *       the file's attributes change (normally it would only update if the file
	 *       modification time or size changed).</p>
	 * @returns {boolean|int}
	 */

	autorefresh;
	/**
	 * <p>This property lets you control the default sort behavior for your
	 *       column. Normally when the user clicks the column header to sort by a
	 *       column the column is initially sorted in ascending order, and then
	 *       clicking again reverses the sort order. If you set
	 *       <strong>defsort</strong> to <strong>-1</strong>, the first click on the
	 *       column header will sort in descending order. Date and size fields have
	 *       this behavior set by default.</p>
	 * @returns {int}
	 */

	defsort;
	/**
	 * <p>Specifies a default width for your column, which will be used unless
	 *       the file display has auto-sizing enabled. If you specify a simple integer
	 *       value this represents a width measured in average characters (e.g.
	 *       <em>12</em> specifies 12 average characters wide). You can also specify an
	 *       absolute number of pixels by adding the <em>px</em> suffix (e.g.
	 *       <em>"150px"</em> specifies 150 pixels).</p>
	 * @returns {int|string}
	 */

	defwidth;
	/**
	 * <p>For graph columns, specifies the first graph color set. The graph will
	 *       be displayed in these colors as long as its percentage is below the
	 *       threshold.<br>&nbsp;</p>
	 *       <p>You can either specify a single color (in <em>r,g,b</em> or
	 *       <em>#rrggbb</em> format), in which case the graph will be a flat solid
	 *       color, or exactly five colors to configure the graph's gradient. In the
	 *       second case, the five colors correspond to <em>outer bright</em>,
	 *       <em>inner bright</em>, <em>inner dark</em>, <em>outer dark</em>, and
	 *       <em>flat</em>. The first four control the gradient and the fifth (flat) is
	 *       used when gradients are disabled.&nbsp;<br><br>The
	 *       <strong>graph_colors</strong> property returns a  {@link Vector}; you need to use the
	 *       <strong>push_back()</strong> method to add your colors to it.</p>
	 * @returns {Vector}
	 */

	graph_colors;
	/**
	 * <p>Similar to <strong>graph_colors</strong>, this property lets you
	 *       configure a second set of colors for a graph column that will be used when
	 *       the graph value exceeds the threshold.</p>
	 * @returns {Vector}
	 */

	graph_colors2;
	/**
	 * <p>For graph columns, specifies the percentage threshold at which the
	 *       graph will switch from&nbsp;the first color set to the second (e.g. a blue
	 *       graph goes red to indicate a drive is nearly full). Set the threshold to
	 *       <strong>-1</strong> to disable the second color set altogether.</p>
	 * @returns {}
	 */

	graph_threshold;
	/**
	 * <p>If&nbsp;the <strong>autogroup</strong> property is set to
	 *       <strong>False</strong>, the <strong>grouporder</strong> property lets you
	 *       control the order your column's groups appear in. Each group should be
	 *       listed in the string in the desired order, separated by a semi-colon (e.g.
	 *       <em>"Never Modified;Modified"</em>). If not provided, groups will default
	 *       to sorting alphabetically.</p>
	 * @returns {string}
	 */

	grouporder;
	/**
	 * <p>If this property is set, this defines the string that will be displayed
	 *       in the column header when this column is added to a Lister. If not set,
	 *       the <strong>label</strong> value will be used.</p>
	 * @returns {string}
	 */

	header;
	/**
	 * <p>Set this to <strong>True</strong> if you&nbsp; want your column to be
	 *       only available for use in <a href="../Info_Tip.htm">Info Tips</a>. You
	 *       might want this if your column takes a significant amount of time to
	 *       return a value, in which case the user would probably only want to use it
	 *       in an Info Tip so they can see the value on demand. If set to
	 *       <strong>False</strong> (the default) the column will be available
	 *       everywhere.</p>
	 * @returns {boolean}
	 */

	infotiponly;
	/**
	 * <p>This field lets you control the justification of your column. If not
	 *       specified, columns default to left justify. Acceptable values are
	 *       <em>center</em>, <em>left</em>, <em>right</em> and
	 * <em>path</em>.</p>
	 * @returns {string}
	 */

	justify;
	/**
	 * <p>If this is set to <strong>True</strong>, and the user has the
	 *       <strong>Sort-field specific key scrolling </strong>Preferences option
	 *       enabled, then your column will participate in this special mode.</p>
	 * @returns {boolean}
	 */

	keyscroll;
	/**
	 * <p>Use this to set a label for the column. This is displayed in the column
	 *       header when the column is added to a&nbsp;Details/Power mode file display
	 *       (unless overridden by the <strong>header</strong> property), and in
	 *       various column lists such as&nbsp;in the <strong><a href="../Folder_Options.htm">Folder Options</a> </strong>dialog.</p>
	 * @returns {string}
	 */

	label;
	/**
	 * <p>If you add strings to this  {@link Vector}(e.g. via the
	 *       <strong>push_back </strong>method) it will be used to provide a drop-down
	 *       list of possible values when searching on this column using the <a href="../Advanced_Find.htm"><strong>Advanced Find</strong></a>
	 *       function.</p>
	 * @returns {string}
	 */

	match;
	/**
	 * <p>If the column type is set to <em>stars</em> this property lets you
	 *       specify the maximum number of stars that will be used. This is used to
	 *       ensure the column is sized correctly.</p>
	 * @returns {int}
	 */

	maxstars;
	/**
	 * <p>This is the name of the method in your script that provides the actual
	 *       values for your new column. This would typically be set to <em>OnXXXXX
	 *       </em>where <em>XXXXX </em>is the name of the command, however any method
	 *       name can be used.<br><br>When the method is invoked it is passed a single
	 *       argument, a <!--?xml:namespace prefix = "c1" /-->{@link ScriptColumnData} object.
	 *       Generically this method is referred to as  {@link OnScriptColumn}.</p>
	 * @returns {string}
	 */

	method;
	/**
	 * <p>If your script implements multiple columns that require common
	 *       calculations to perform, you may wish to set the <strong>multicol</strong>
	 *       property. If this is set to <strong>True</strong> then your column handler
	 *       function has the option of returning data for multiple columns
	 *       simultaneously, rather than just the specific column it is being invoked
	 *       for.<br><br>When your handler is called, the <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link ScriptColumnData} object
	 *       won't contain the usual <strong>group</strong>, <strong>sort</strong>,
	 *       <strong>type</strong> and <strong>value</strong> properties. Instead, it
	 *       will have a <strong>columns</strong> property that points to a {@link Map} that lets you set the values for
	 *       one or more of your columns at once.<br><br>For example, you might set the
	 *       value of a column called <em>MyColumn </em>like
	 *       this:<br><br><em>scriptColData.columns("MyColumn").value = "My Column
	 *       Value";</em></p>
	 * @returns {boolean}
	 */

	multicol;
	/**
	 * <p>This is the raw name of the column. This determines the name that can
	 *       be used to control the column programmatically (for example, the
	 *       <strong>Set COLUMNSTOGGLE</strong> command can be used to toggle a column
	 *       on or off by name).<br><br>The name of a custom column is built from a
	 *       combination of the name of the script that provides the column and the raw
	 *       name of the column itself, and is preceded by the prefix <em>scp:</em>.
	 *       For example, if your script were called <em>My Script</em> and your
	 *       column's name were <em>My Column</em>, you could toggle this column using
	 *       the command <strong>Set COLUMNSTOGGLE="scp:My Script/My Column"</strong>.
	 *       You can use the button editor menus to build the command automatically, if
	 *       you are unsure of anything.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Set to <strong>True</strong> to force Opus to update the value for this
	 *       column when a file's name changes.</p>
	 * @returns {boolean}
	 */

	namerefresh;
	/**
	 * <p>Set to <strong>True</strong> to prevent the file display being grouped
	 *       by this column.</p>
	 * @returns {boolean}
	 */

	nogroup;
	/**
	 * <p>Set to <strong>True</strong> to prevent the file display being sorted
	 *       by this column.</p>
	 * @returns {boolean}
	 */

	nosort;
	/**
	 * <p>Time, in milliseconds, before Opus may give up waiting for calculation
	 *       of a column value.</p>
	 *       <p>Defaults to 10000 (i.e. 10 seconds). Set to 0 (zero) to force Opus to
	 *       wait forever in all situations.</p>
	 *       <p>The timeout is not always applicable. When Opus asks a script for
	 *       column data to show in a file display, the timeout is not used because the
	 *       calculation happens in the background and doesn't hold anything up. But
	 *       Opus can give up waiting if a column takes too long in situations where it
	 *       does hold up other things. This is to avoid blocking forever when scripts
	 *       get stuck in infinite loops.</p>
	 *       <p>Find filters and the Print/Export Folder Listing dialog are two
	 *       examples which use the timeout when requesting data from script columns. A
	 *       column which calculates hashes of files with no size limit is an example
	 *       which could be expected to take a long time and where it would make sense
	 *       to increase the timeout or set it to 0.</p>
	 * @returns {int}
	 */

	timeout;
	/**
	 * <p>This field lets you set the default type of the column.</p>
	 *       <p>If not specified, columns default to plain text.</p>
	 *       <p>Acceptable values are:</p>
	 *       <dl>
	 *         <dt><strong>number</strong>:
	 *         </dt><dd>The column displays integer numbers.
	 *         </dd><dt><strong>double</strong>:
	 *         </dt><dd>The column displays floating point (fractional) numbers.
	 *         </dd><dt><strong>size</strong>:
	 *         </dt><dd>The column displays file sizes (automatically displays bytes, KB,
	 *         MB, etc.).
	 *         </dd><dt><strong>zip</strong>:
	 *         </dt><dd>The column displays file sizes (uses the settings for Zip file
	 *         sizes).
	 *         </dd><dt><strong>graph</strong>:
	 *         </dt><dd>The column displays a bar graph (expects a value from 0 to 100).
	 *         </dd><dt><strong>graphrel</strong>:
	 *         </dt><dd>The column displays a bar graph. Opus automatically keeps track of
	 *         the minimum and maximum values provided and scales the graph
	 *         accordingly.
	 *         </dd><dt><strong>graphrel0</strong>:
	 *         </dt><dd>Similar to <strong>graphrel</strong> except the minimum value is
	 *         always 0, and Opus keeps track of the maximum value.
	 *         </dd><dt><strong>igraph</strong>:
	 *         </dt><dd>The column displays an inverted bar graph.
	 *         </dd><dt><strong>igraphrel</strong>:
	 *         </dt><dd>Inverted relative bar graph.
	 *         </dd><dt><strong>igraphrel0</strong>:
	 *         </dt><dd>Inverted bar graph relative to 0.
	 *         </dd><dt><strong>percent</strong>:
	 *         </dt><dd>The column displays a percentage.
	 *         </dd><dt><strong>percentrel</strong>:
	 *         </dt><dd>Relative percentage.
	 *         </dd><dt><strong>percentrel0</strong>:
	 *         </dt><dd>Percentage relative to 0.
	 *         </dd><dt><strong>date</strong>:
	 *         </dt><dd>The column displays a date.
	 *         </dd><dt><strong>time</strong>:
	 *         </dt><dd>The column displays a time.
	 *         </dd><dt><strong>datetime</strong>:
	 *         </dt><dd>The column displays both a date and a time.
	 *         </dd><dt><strong>stars</strong>:
	 *         </dt><dd>The column displays stars (similar to the built-in <em>Rating</em>
	 *         column). </dd></dl>
	 *       <p>For plain text columns, you can specify <strong>numericsort</strong> or
	 *       <strong>nonumericsort</strong> to override the <em>"numeric order filename
	 *       sorting"</em> setting in Folder Options. Similarly,
	 *       <strong>wordsort</strong> or <strong>nowordsort</strong> can be used to
	 *       override the <em>"word sort (special handling for hyphens, etc.)"</em>
	 *       setting. You can also combine both options, e.g.
	 *       <strong>nonumericsort,nowordsort</strong> to request only basic sorting.
	 *       Leave the type unset, or set it to an empty string, for plain text data
	 *       which respects the Folder Options sort settings.</p>
	 *       <p>For <em>date</em>, <em>time</em> and <em>datetime</em> columns, you can
	 *       also specify <strong>utc</strong> to have the values automatically
	 *       converted from UTC to local time (e.g. <strong>datetime,utc</strong>).</p>
	 *       <p>For <em>number</em> and <em>double</em> columns, you can also specify
	 *       <strong>signed</strong> to have the values treated as signed rather than
	 *       unsigned (e.g. <strong>number,signed</strong>).</p>
	 *       <p>For the graph columns, you can use <strong>graph_colors</strong>,
	 *       <strong>graph_colors2</strong> and <strong>graph_threshold </strong>to
	 *       configure the graph's appearance.</p>
	 *       <p>&nbsp;</p>
	 *       <p>Your  <!--?xml:namespace prefix = "c1" /-->{@link OnScriptColumn}method can
	 *       override the type on a per-file basis, however this field sets the default
	 *       type and also controls the behavior of the <a href="../Advanced_Find.htm"><strong>Advanced Find</strong></a> function
	 *       when searching using your column.<br><br></p>
	 * @returns {string}
	 */

	type;
	/**
	 * <p>Allows you to associate a data value with a column. The value will be
	 *       passed to your column handler in the <strong><a href="ScriptColumnData.htm">ScriptColumnData</a>.userdata</strong>
	 *       property</p>
	 * @returns {any}
	 */

	userdata;
} //end class
