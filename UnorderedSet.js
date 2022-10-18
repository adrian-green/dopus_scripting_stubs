/**
 *Similar to a StringSet but can store elements of any type rather than just strings.
 */
class UnorderedSet {
	/**
	 * <p>Returns the number of elements the&nbsp;<strong>UnorderedSet</strong>
	 *       currently holds.</p>
	 * @returns {int}
	 */

	count;
	/**
	 * <p>Returns <strong>True</strong> if the <strong>UnorderedSet</strong> is
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
	 * <p>Copies the contents of another&nbsp;<strong>UnorderedSet</strong> to
	 *       this one. You can also pass an array or {@link Vector} object.</p>
	 * @param {UnorderedSet} from
	 *
	 */
	assign(from){}
	/**
	 * <p>Clears the contents of the <strong>UnorderedSet</strong>.</p>
	 *
	 */
	clear(){}
	/**
	 * <p>Erases the&nbsp;element if it exists in the set.</p>
	 * @param {*} value
	 *
	 */
	erase(value){}
	/**
	 * <p>Returns <strong>True</strong> if the specified&nbsp;element exists in
	 *       the set.</p>
	 * @param {*} value
	 * @returns {boolean}
	 */
	exists(value){}
	/**
	 * <p>Inserts the&nbsp;element into the set if it doesn't already exist.
	 *       Returns <strong>True</strong> if successful.</p>
	 * @param {*} value
	 * @returns {boolean}
	 */
	insert(value){}
	/**
	 * <p>Merges the contents of another <strong>UnorderedSet </strong>with this
	 *       one.</p>
	 * @param {UnorderedSet} from
	 *
	 */
	merge(from){}
} //end class
