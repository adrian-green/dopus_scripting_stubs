/**
 *This object is a helper object that you can use to create various other objects like Map and Vector. It is obtained from the DOpus.Create method.
 */
class DOpusFactory {
	/**
	 * <p>Returns a new  {@link Blob}&nbsp;object, that lets you
	 *       access and manipulate a chunk of binary data from a script. If no
	 *       parameters are given the new <strong>Blob</strong> will be empty - you can
	 *       set its size using the <strong>resize</strong> method - otherwise you can
	 *       specify the initial size as a parameter.<br><br>You can also create a
	 *       <strong>Blob</strong> pre-filled with data by specifying the actual byte
	 *       values (e.g. <em>Blob(72,69,76,76,79)</em>).<br><br>If another
	 *       <strong>Blob</strong> (or an array - see the documentation on the
	 *       <strong>Blob</strong> object for a discussion of this) is given then the
	 *       new <strong>Blob</strong> will be created as a copy of the existing
	 *       one.</p>
	 * @param {none|int|<byte|Blob} none_or_size_or_byte_or_blob
	 * @returns {Blob}
	 */
	Blob(none_or_size_or_byte_or_blob) {
	}

	/**
	 * <p>Creates a new  {@link BusyIndicator}&nbsp;object,
	 *       that lets you control the breadcrumbs bar busy indicator from your
	 *       script.</p>
	 * @returns {BusyIndicator}
	 */
	BusyIndicator() {
	}

	/**
	 * <p>Creates a new <!--?xml:namespace prefix = "c1" /-->{@link Command} object, that lets you run
	 *       Opus commands from a script.</p>
	 * @returns {Command}
	 */
	Command() {
	}

	/**
	 * <p>Creates a new  {@link Date}&nbsp;object. If an existing
	 *       <strong>Date</strong> object or date value is specified the new object
	 *       will be initialized to that value, otherwise the date will be set to the
	 *       current local time.</p>
	 * @param {none|any} none_or_date
	 * @returns {Date}
	 */
	Date(none_or_date) {
	}

	/**
	 * <p>Creates a new  {@link Map}&nbsp;object. If no arguments are
	 *       provided, the <strong>Map</strong> will be empty. Otherwise, the
	 *       <strong>Map</strong> will be pre-initialized with the supplied key/value
	 *       pairs. For example: <em>Map("firstname","fred","lastname","bloggs");</em>.
	 *       The individual keys and values can be different types.</p>
	 * @param {none|any} none_or_key_value
	 * @returns {Map}
	 */
	Map(...none_or_key_value) {
	}

	/**
	 * <p>Creates a new case-sensitive  {@link StringSet}&nbsp;object. If no
	 *       arguments are provided, the <strong>StringSet </strong>will be empty.
	 *       Otherwise it will be pre-initialized with the supplied strings; for
	 *       example: <em>StringSet("dog","cat","pony");<br>&nbsp;</em></p>
	 *       <p>You can also pass an array of strings or  {@link Vector} object to initialise the
	 *       set.</p>
	 * @param {none|string} none_or_string
	 * @returns {StringSet}
	 */
	StringSet(...none_or_string) {
	}

	/**
	 * <p>Creates a new case-insensitive  {@link StringSet}&nbsp;object. If no
	 *       arguments are provided, the <strong>StringSet </strong>will be empty.
	 *       Otherwise it will be pre-initialized with the supplied strings.</p>
	 * @param {none|string} none_or_string
	 * @returns {StringSet}
	 */
	StringSetI(...none_or_string) {
	}

	/**
	 * <p>Creates a new {@link StringTools} object, that
	 *       provides helper functions for string encoding and decoding.</p>
	 * @returns {StringTools}
	 */
	StringTools() {
	}

	/**
	 * <p>Creates a new <strong> <a href="UnorderedSet.htm">UnorderedSet</a></strong>&nbsp;object. If no
	 *       arguments are provided the <strong>UnorderedSet </strong>will be empty.
	 *       Otherwise it will be pre-initialized with the supplied
	 *       elements.<br>&nbsp;</p>
	 *       <p>You can also pass an array or  <!--?xml:namespace prefix = "c1" /-->{@link Vector} to initialise the
	 *   set.</p>
	 * @param {none|any} none_or_variants...
	 * @returns {UnorderedSet}
	 */
	UnorderedSet(...none_or_variants) {
	}

	/**
	 * <p>Creates a new  {@link Vector}&nbsp;object.</p>
	 *       <p>If no arguments are provided, the <strong>Vector</strong> will be
	 *       empty.</p>
	 *       <p>If a single integer argument is provided, the <strong>Vector</strong>
	 *       will be pre-initialized to that number of elements.</p>
	 *       <p>You can also pass another  {@link Vector} or a <em>JScript </em>array,
	 *       or most enumerable objects, as the argument to initialise the new
	 *       <b>Vector</b> with the contents of an existing collection.</p>
	 *       <p>If more than one argument is provided, the <strong>Vector</strong> will
	 *       be pre-initialized with those elements; for example:
	 *       <em>Vector("dog","cat","horse"); </em>The individual elements can be
	 *       different types.</p>
	 *       <p>If you want to create a <b>Vector</b> with just a single element, it is
	 *       best to create an empty <b>Vector</b> and then add the element as a second
	 *       step. Passing a single element during creation can have unexpected
	 *       results, as it may be interpreted as one of the other cases. (Many of the
	 *       scripting objects can be implicitly converted into integers or
	 *       collections.)<br></p>
	 * @param {none|int|any|Vector|array} values
	 * @returns {Vector}
	 */
	Vector(...values) {
	}
} //end class
