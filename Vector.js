/**
 *This object is similar to an array - it can store an unlimited number of elements of any type. Several properties and methods in the Opus scripting interface use Vectors, and you can use them interchangeably with arrays in most cases. The Vector is provided because some scripting languages only offer incomplete or incompatible arrays - using Vectors means the object can be used consistently across any ActiveX scripting language. A Vector is created by the DOpusFactory.Vector method.
 */
class Vector {
	/**
	 * <p>Returns the capacity of the <strong>Vector</strong> (the number of
	 *       elements it can hold without having to reallocate memory). This is not the
	 *       same as the number of elements it currently holds, which can be 0 even if
	 *       the capacity is something larger.</p>
	 * @returns {int}
	 */

	capacity;
	/**
	 * <p>Returns the number of elements the <strong>Vector</strong> currently
	 *       holds.</p>
	 * @returns {int}
	 */

	count;
	/**
	 * <p>Returns <strong>True</strong> if the <strong>Vector</strong> is empty,
	 *       <strong>False</strong> if not.</p>
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
	 * <p>Copies the values of another <strong>Vector</strong> to the end of this
	 *       one, preserving the existing values as well. If <em>start</em> and
	 *       <em>end</em> are not provided, the entire <strong>Vector</strong> is
	 *       appended - otherwise, only the specified elements are
	 *       appended.<br><br>Instead of a <strong>Vector</strong> object you can also
	 *       pass a <em>collection</em> to this method and the contents of the
	 *       collection will be copied to the end of the
	 *       <strong>Vector</strong>.<br>&nbsp;</p>
	 *       <p>In <em>JScript</em> you can pass a standard array to this method to
	 *       copy the array to the end of a <strong>Vector</strong>.</p>
	 * @param {Vector} from
	 * @param {int} start
	 * @param {int} end
	 *
	 */
	append(from, start, end){}
	/**
	 * <p>Copies the value of another <strong>Vector</strong> to this one. If
	 *       <em>start</em> and <em>end</em> are not provided, the entire
	 *       <strong>Vector</strong> is copied - otherwise, only the specified elements
	 *       are copied.<br><br>Instead of a <strong>Vector</strong> object you can
	 *       also pass a <em>collection</em> to this method and the contents of the
	 *       collection will be copied to the <strong>Vector</strong>.<br>&nbsp;</p>
	 *       <p>In <em>JScript</em> you can pass a standard array to this method to
	 *       copy the array into a <strong>Vector</strong>.</p>
	 * @param {Vector} from
	 * @param {int} start
	 * @param {int} end
	 *
	 */
	assign(from, start, end){}
	/**
	 * <p>Returns the last element in the <strong>Vector</strong>.</p>
	 * @returns {variant}
	 */
	back(){}
	/**
	 * <p>Clears the contents of the <strong>Vector</strong>.</p>
	 *
	 */
	clear(){}
	/**
	 * <p>Erases the element at the specified index.</p>
	 * @param {int} index
	 *
	 */
	erase(index){}
	/**
	 * <p>Exchanges the positions of the two specified elements.</p>
	 * @param {int} index1
	 * @param {int} index2
	 *
	 */
	exchange(index1, index2){}
	/**
	 * <p>Returns the first element in the <strong>Vector</strong>.</p>
	 * @returns {variant}
	 */
	front(){}
	/**
	 * <p>Inserts the provided value at the specified position.</p>
	 * @param {int} index
	 * @param {variant} value
	 *
	 */
	insert(index, value){}
	/**
	 * <p>Removes the last element of the <strong>Vector</strong>.</p>
	 *
	 */
	pop_back(){}
	/**
	 * <p>Adds the provided value to the end of the
	 *     <strong>Vector</strong>.</p>
	 * @param {variant} value
	 *
	 */
	push_back(value){}
	/**
	 * <p>Reserves space in the <strong>Vector</strong> for the specified number
	 *       of elements (increases its <strong>capacity</strong>, although the
	 *       <strong>count</strong> of elements remains unchanged).<br>&nbsp;</p>
	 *       <p>Note that <strong>Vectors</strong> grow dynamically - you don't have to
	 *       specifically reserve or resize them. However if you want to add a large
	 *       number of elements to a <strong>Vector</strong> it can be more efficient
	 *       to reserve space for them first.</p>
	 * @param {int} capacity
	 *
	 */
	reserve(capacity){}
	/**
	 * <p>Resizes the <strong>Vector</strong> to the specified number of
	 *       elements. Any existing elements past the new size of the
	 *       <strong>Vector</strong> will be erased.</p>
	 * @param {int} size
	 *
	 */
	resize(size){}
	/**
	 * <p>Reduces the capacity of the <strong>Vector</strong> to the number of
	 *       elements it currently holds.</p>
	 *
	 */
	shrink_to_fit(){}
	/**
	 * <p>Sorts the contents of the <strong>Vector</strong>. Strings and numbers
	 *       are sorted alphabetically and numerically - other elements are grouped by
	 *       type but not specifically sorted in any particular order.</p>
	 *
	 */
	sort(){}
	/**
	 * <p>Removes all but one of any duplicate elements from the
	 *       <strong>Vector</strong>. The number of elements removed is
	 *   returned.</p>
	 * @returns {int}
	 */
	unique(){}
} //end class
