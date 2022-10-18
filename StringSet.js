/**
 *This object is similar to an array or vector (e.g. Vector) of strings, but has the advantage of using a dictionary system to locate strings rather than numeric indexes. It is obtained from the DOpusFactory.StringSet and StringSetI methods.
 */
class StringSet {
	/**
	 * <p>Returns the number of elements the&nbsp;<strong>StringSet</strong>
	 *       currently holds.</p>
	 * @returns {int}
	 */

	count;
	/**
	 * <p>Returns <strong>True</strong> if the <strong>StringSet</strong> is
	 *       empty, <strong>False</strong> if not.</p>
	 * @returns {boolean}
	 */

	empty;
	/**
	 * <p>A synonym for <strong>count</strong>.</p>
	 * @returns {int}
	 */

	length;
	/**
	 * <p>A synonym for <strong>count</strong>.</p>
	 * @returns {int}
	 */

	size;

	/**
	 * <p>Copies the contents of another&nbsp;<strong>StringSet</strong> to this
	 *       one. You can also pass an array of strings or {@link Vector} object.</p>
	 * @param {StringSet} from
	 *
	 */
	assign(from) {
	}

	/**
	 * <p>Clears the contents of the <strong>StringSet</strong>.</p>
	 *
	 */
	clear() {
	}

	/**
	 * <p>Erases the string if it exists in the set.</p>
	 * @param {string} value
	 *
	 */
	erase(value) {
	}

	/**
	 * <p>Returns <strong>True</strong> if the specified string exists in the
	 *       set.</p>
	 * @param {string} value

	 * @returns {boolean}
	 */
	exists(value) {
	}

	/**
	 * <p>Inserts the string into the set if it doesn't already exist. Returns
	 *       <strong>True</strong> if successful.</p>
	 * @param {string} value

	 * @returns {boolean}
	 */
	insert(value) {
	}

	/**
	 * <p>Merges the contents of another <strong>StringSet</strong> with this
	 *       one.</p>
	 * @param {StringSet} from
	 *
	 */
	merge(from) {
	}
} //end class
