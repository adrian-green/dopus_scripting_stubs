/**
 *This object is provided to the script-specified method used to add new columns to Opus.
 */
class ScriptColumnData {
	/**
	 * <p>Provides the name of the column that Opus wants the script to return
	 *       the value for. If you use the same {@link OnScriptColumn}method to
	 *       provide multiple columns you can use this to tell the columns
	 *   apart.</p>
	 * @returns {string}
	 */

	col;
	/**
	 * <p>If the  <!--?xml:namespace prefix = "c1" /-->{@link ScriptColumn}<strong>.multicol
	 *       </strong>value is set to <strong>True</strong> when the column is added,
	 *       then this property provides a   {@link Map} that lets you return the values of
	 *       one or more columns at once.<br><br>You may want to use this method if
	 *       your script returns multiple columns that all share common calculations
	 *       (e.g. reading the contents of a folder).&nbsp;That way, you can avoid
	 *       repeating potentially time consuming operations when you're called for the
	 *       second and subsequent columns.<br><br>The&nbsp; {@link Map} contains one member element for
	 *       each of your columns. Each member element has <strong>group</strong>,
	 *       <strong>group_type</strong>, <strong>sort</strong>, <strong>type</strong>,
	 *       <strong>userdata</strong>, and <strong>value</strong> properties which are
	 *       equivalent to the ones described below.<br><br>For example, you might set
	 *       the value of a column called <em>MyColumn </em>like
	 *       this:<br><br><em>scriptColData.columns("MyColumn").value = "My Column
	 *       Value";</em></p>
	 *       <p>You should check if a column exists in the map before populating data
	 *       for it. In some situations, Opus will only request a some of the columns
	 *       your add-in supports, not all of them.</p>
	 *       <p>If you do not fill in data for a column which Opus still needs, Opus
	 *       will call your method again to request it, with its name in the
	 *       <strong>col</strong> property (but still in multi-column mode). You can
	 *       take advantage of this if calculating one piece of data yields values for
	 *       some of your columns but not all of them. You do not need to populate
	 *       every column if the data is not available, but you should at least
	 *       populate the <strong>col</strong> column.</p>
	 *       <p>As a consequence of the above, when using multi-column mode you should
	 *       <em>always</em> set some kind of value for any column you have spent time
	 *       calculating, even if the result of the calculation is that nothing should
	 *       be shown in the column. If nothing should be shown, set the value to an
	 *       empty string (this is fine even if the column normally displays numbers or
	 *       another type of data). If you don't set any value at all, Opus will assume
	 *       you haven't calculated that column yet and may call your script again to
	 *       ask for it, which could cause you to waste time re-calculating it when you
	 *       already know it is blank.</p>
	 * @returns {Map}
	 */

	columns;
	/**
	 * <p>If the  {@link ScriptColumn}<strong>.autogroup
	 *       </strong>value is set to <strong>False</strong> when the column is added,
	 *       you should set this value to indicate the group that this file should be
	 *       placed in when the list is grouped by your column. If you don't provide a
	 *       group then this file will go into the <em>Unspecified</em> group. If
	 *       <strong>autogroup</strong> is set to <strong>True</strong> this value is
	 *       ignored.<br><br>Note that if the  <!--?xml:namespace prefix = "c1" /--> {@link ScriptColumn}<strong>.multicol
	 *       </strong>value is set to <strong>True</strong> when the column is added
	 *       then this property will be found inside the <strong>columns </strong>  {@link Map}.</p>
	 * @returns {string}
	 */

	group;
	/**
	 * <p>If the group is set via the <strong>group</strong> property,
	 *       <strong>group_type</strong> lets you control the formatting of the group
	 *       title using the same keywords as the <strong>type</strong> field (e.g. you
	 *       can supply a number and have the group title formatted as a file size by
	 *       setting <em>group_type="size"</em>).<br><br>Note that if the  <!--?xml:namespace prefix = "c1" /-->  {@link ScriptColumn}<strong>.multicol
	 *       </strong>value is set to <strong>True</strong> when the column is added
	 *       then this property will be found inside the <strong>columns </strong>  {@link Map}.</p>
	 * @returns {string}
	 */

	group_type;
	/**
	 * <p>Returns an {@link Item} object
	 *       representing the file or folder that Opus wants the script to&nbsp;return
	 *       the column value for.</p>
	 * @returns {Item}
	 */

	item;
	/**
	 * <p>Lets you control the sort order of your column by providing a <em>sort
	 *       key </em>that can be different to the <strong>value</strong>. If provided,
	 *       and the list is sorted by your column, Opus will use the value of this
	 *       field to position this item rather than the <strong>value</strong>
	 *       value.<br><br>Note that if the  <!--?xml:namespace prefix = "c1" /-->  {@link ScriptColumn}<strong>.multicol
	 *       </strong>value is set to <strong>True</strong> when the column is added
	 *       then this property will be found inside the <strong>columns </strong>  {@link Map}.</p>
	 * @returns {*}
	 */

	sort;
	/**
	 * <p>Returns a  {@link Tab}&nbsp;object representing the tab
	 *       that contains the item.</p>
	 * @returns {Tab}
	 */

	tab;
	/**
	 * <p>Lets you override the default type of the column (set via {@link ScriptColumn}<strong>.type</strong>
	 *       when the column was added) on a per-file/folder basis.</p>
	 *       <p>If not specified, and no default was specified either, then columns
	 *       default to plain text.</p>
	 *       <p>Note that if the  <!--?xml:namespace prefix = "c1" /-->  {@link ScriptColumn}<strong>.multicol
	 *       </strong>value is set to <strong>True</strong> when the column is added
	 *       then this property will be found inside the <strong>columns </strong>  {@link Map}.</p>
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
	 *         </dd><dt><strong>igraph</strong>:
	 *         </dt><dd>The column displays an inverted bar graph.
	 *         </dd><dt><strong>percent</strong>:
	 *         </dt><dd>The column displays a percentage.
	 *         </dd><dt><strong>date</strong>:
	 *         </dt><dd>The column displays a date.
	 *         </dd><dt><strong>time</strong>:
	 *         </dt><dd>The column displays a time.
	 *         </dd><dt><strong>datetime</strong>:
	 *         </dt><dd>The column displays both a date and a time.
	 *         </dd><dt><strong>stars</strong>:
	 *         </dt><dd>The column displays stars (similar to the built-in <em>Rating</em>
	 *         column). The <strong>value</strong> should be in the form "x" or "x/y".
	 *         </dd><dt>
	 *         </dt><dt>
	 *         </dt><dl>
	 *           <dt>
	 *           </dt><dt>
	 *           </dt><p>For <em>date</em>, <em>time</em> and <em>datetime</em> columns, you
	 *           can also specify <strong>utc</strong> to have the values automatically
	 *           converted from UTC to local time (e.g.
	 *           <strong>datetime,utc</strong>).</p>
	 *           <dt>
	 *           </dt><dt>
	 *           </dt><p>For <em>number</em> and <em>double</em> columns, you can also
	 *           specify <strong>signed</strong> to have the values treated as signed
	 *           rather than unsigned (e.g. <strong>number,signed</strong>).</p>
	 *           <dt>
	 *           </dt><dt>
	 *           </dt><p>The options above are a subset of those you can specify via {@link ScriptColumn}<strong>.type</strong>,
	 *           since not all options make sense on a per-file/folder basis.</p>
	 *           <dt>
	 *           </dt><dt>
	 *           </dt><p>Note that if you mix different types within the one column then the
	 *           results you get when sorting by this column, or searching on your
	 *           column using the <strong><a href="../Advanced_Find.htm">Advanced
	 *           Find</a> </strong>function, may be hard to
	 *     predict.</p></dl></dl>
	 * @returns {string}
	 */

	type;
	/**
	 * <p>This field is how your method returns the actual value for your column
	 *       - that is, the information that is displayed to the user in this column
	 *       for each file and folder.<br><br>If the type for this column has been set
	 *       (either by <strong>ScriptColumnData.type </strong>or  {@link ScriptColumn}<strong>.type</strong>)
	 *       then Opus will try to convert the provided value to the specified type. If
	 *       the type is not set then Opus will treat the value as a plain text
	 *       string.<br><br>If you don't provide a sort key via the
	 *       <strong>sort</strong> field then Opus will also use this value to order
	 *       the list when the list is sorted by this column.<br><br>Note that if the  <!--?xml:namespace prefix = "c1" /-->  {@link ScriptColumn}<strong>.multicol
	 *       </strong>value is set to <strong>True</strong> when the column is added
	 *       then this property will be found inside the <strong>columns </strong>  {@link Map}.</p>
	 * @returns {*}
	 */

	value;
	/**
	 * <p>This returns the value associated with this column via <strong><a href="ScriptColumn.htm">ScriptColumn</a>.userdata</strong>&nbsp;(if any)
	 *       when the column was added.<br><br>Note that if the  <!--?xml:namespace prefix = "c1" /-->  {@link ScriptColumn}<strong>.multicol
	 *       </strong>value is set to <strong>True</strong> when the column is added
	 *       then this property will be found inside the <strong>columns </strong>  {@link Map}.</p>
	 * @returns {*}
	 */

	userdata;
} //end class
