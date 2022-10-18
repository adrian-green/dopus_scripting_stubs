/**
 *This object allows a script to access the in-built pattern matching functions in Opus. It is obtained from the FSUtil.NewWild method.
 */
class Wild {
	/**
	 * <p>Returns the current pattern in the Wild object</p>
	 * @returns {string}
	 */

	_default_value

	/**
	 * <p>Escapes all wildcard characters in the input string and returns the
	 *       result. For example, "<strong>the * 'dog' said *</strong>" would be
	 *       conterted to "<strong>the '* ''dog'' said '*</strong>".</p>
	 *       <p>&nbsp;</p>
	 *       <p>The optional type argument lets you specify the conversion:</p>
	 *       <p>&nbsp;&nbsp;&nbsp; <em>none</em>: Escape characters used in <a href="../Pattern_Matching_Syntax.htm">standard pattern
	 *       matching</a><br>&nbsp;&nbsp;&nbsp; <strong>r</strong>: Escape characters
	 *       used in <a href="../Regular_Expression_Syntax.htm">regular
	 *       expressions</a>&nbsp;<br>&nbsp;&nbsp;&nbsp; <strong>b</strong>: Double all
	 *       back-slashes<br>&nbsp;&nbsp;&nbsp; <strong>n</strong>: Double all
	 *       back-slashes that come before the letter
	 * '<strong>n</strong>'<br>&nbsp;</p>
	 *       <p>Note that these modes cannot be combined.</p>
	 * @param {string} input
	 * @param {string} type
	 * @returns {string}
	 */
	EscapeString(input, type) {
	}

	/**
	 * <p>Compares the specified string against the previously-parsed pattern,
	 *       and returns <strong>True</strong> if it matches.</p>
	 * @param {string} test
	 * @returns {boolean}
	 */
	Match(test) {
	}

	/**
	 * <p>Parses the supplied pattern. The flags string is optional - if supplied
	 *       it must be a string consisting of one or more of the following
	 *       characters:</p>
	 *       <p><br><strong>c</strong> - case-sensitive (otherwise pattern matching is
	 *       not case-sensitive)&nbsp;<br><strong>d</strong> - DOS only (only standard
	 *       MS-DOS wildcards are supported)<br><strong>f</strong> - filename mode
	 *       (special handling for matching filenames)<br><strong>r</strong> - regular
	 *       expression (otherwise <a href="../Pattern_Matching_Syntax.htm">standard
	 *       pattern matching</a> is used)&nbsp;</p>
	 * @param {string} pattern
	 * @param {string} flags
	 * @returns {boolean}
	 */
	Parse(pattern, flags) {
	}
} //end class
