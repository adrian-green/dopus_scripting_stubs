/**
 *This object is provided to make it easier to deal with variables representing dates. It is obtained from the DOpusFactory.Date method as well as various properties in other objects.
 */
class Date {
	/**
	 * <p>Returns a <em>VT_DATE</em> representing the value of this
	 *       <strong>Date</strong> object (excluding the milliseconds).</p>
	 * @returns {Date}
	 */

	_default_value;
	/**
	 * <p>Get or set&nbsp;the <em>day</em> value of the date.</p>
	 * @returns {int}
	 */

	day;
	/**
	 * <p>Get or set the&nbsp;<em>hour</em> value of the date.</p>
	 * @returns {int}
	 */

	hour;
	/**
	 * <p>Get or set the&nbsp;<em>minute</em> value of the date.</p>
	 * @returns {int}
	 */

	min;
	/**
	 * <p>Get or set the&nbsp;<em>month</em> value of the date.</p>
	 * @returns {int}
	 */

	month;
	/**
	 * <p>Get or set the&nbsp;<em>milliseconds</em> value of the date.</p>
	 * @returns {int}
	 */

	ms;
	/**
	 * <p>Get or set the&nbsp;<em>seconds</em> value of the date.</p>
	 * @returns {int}
	 */

	sec;
	/**
	 * <p>Get the&nbsp;<em>day-of-the-week</em>&nbsp;value of the date.</p>
	 * @returns {int}
	 */

	wday;
	/**
	 * <p>Get or set the&nbsp;<em>year</em> value of the
	 * date.</p>
	 * @returns {int}
	 */

	year;

	/**
	 * <p>Adds the specified value to the date. The interpretation of the
	 *       specified value is controlled by the <em>type</em>
	 *       string:<br><br><strong>l</strong> - milliseconds<br><strong>s</strong> -
	 *       seconds<br><strong>m</strong> - minutes<br><strong>h</strong> -
	 *       hours<br><strong>d</strong> - days<br><strong>w</strong> -
	 *       weeks<br><strong>M</strong> - months<br><strong>y</strong> -
	 *   years</p>
	 * @param {int} value
	 * @param {string} type
	 *
	 */
	Add(value, type) {
	}

	/**
	 * <p>Returns a new <strong>Date</strong> object set to the same date as this
	 *       one.</p>
	 * @returns {Date}
	 */
	Clone() {
	}

	/**
	 * <p>Compares this date against the <em>other</em> date. The return value
	 *       will be <strong>0</strong> (equal), <strong>1</strong> (greater) or
	 *       <strong>-1</strong> (less).<br><br>The optional <em>type</em> string
	 *       controls how the comparison is performed:<br><br><strong>s</strong> -
	 *       ignore seconds. If specified, the optional <em>tolerance</em> argument
	 *       specifies the comparison tolerance in seconds.<br><strong>sD</strong> -
	 *       ignore seconds, and compensate automatically for daylight
	 *       savings.<br><strong>t</strong> - compare times only<br><strong>d</strong>
	 *       - compare dates only</p>
	 * @param {Date} other
	 * @param {string} [type]
	 * @param {int} [tolerance]
	 * @returns {int}
	 */
	Compare(other, type, tolerance) {
	}

	/**
	 * <p>Returns a formatted date or time string. The <em>format </em>and
	 *       <em>flags </em>arguments are both optional.</p>
	 *       <p>If you do not give a <em>format</em>, the result will include both date
	 *       and time, formatted the same as date-time columns in the file display.</p>
	 *       <p>If you give a <em>format </em>of just <strong>"d"</strong> or
	 *       <strong>"t"</strong> then the result will be just the date or time part,
	 *       formatted the same as date or time columns in the file display.</p>
	 *       <p>The file display's formats depend on the user's locale and Windows
	 *       settings. You should use those options if you wish to present a date/time
	 *       to the user in the way they expect them to look, but not if you need to
	 *       store them in a specific format.</p>
	 *       <p>When using the file display's format (that is, the <em>format</em>
	 *       argument is empty, <strong>"d"</strong> or <strong>"t"</strong>), you can
	 *       optionally pass one or more case-sensitive flags in the second
	 *       <em>flags</em> argument to override a few settings:</p>
	 *       <ul>
	 *         <li><strong>N</strong> - Force day names on in dates within the last
	 *         week. "Today", "Monday", etc.
	 *         </li><li><strong>n</strong> - Force day names off.
	 *         </li><li><strong>S</strong> - Force seconds on in times.
	 *         </li><li><strong>s</strong> - Force seconds off.
	 *         </li><li><strong>M</strong> - Force milliseconds on in times. (Milliseconds
	 *         will be zero if the stored time does not have millisecond accuracy.)
	 *         </li><li><strong>m</strong> - Force milliseconds off.
	 *         </li><li><strong>P</strong> - Force time hours to be padded to two digits.
	 *         </li><li><strong>p</strong> - Do not force time hours to be padded. </li></ul>
	 *       <p>For example, to get just the date, using the user's locale, but with
	 *       day names forced off: <strong>myDate.Format("d","n")</strong>. To get the
	 *       date and time, using the user's locale, but with day names forced on and
	 *       seconds forced off: <strong>myDate.Format("","Ns")</strong>.</p>
	 *       <p>The <em>format </em>can also use the syntax shown in <a href="../Codes_for_date_and_time.htm">Codes for date and time</a>,
	 *       allowing for arbitrary formats. For example,
	 *       <strong>myDate.Format("D#yyyy-MM-dd T#HH:mm:ss")</strong> would return a
	 *       string like <strong>2016-07-28 15:45:26</strong>.</p>
	 *       <p>When explicitly specifying a format, the <em>flags </em>argument should
	 *       not be used and will be ignored.</p>
	 * @param {string} [format]
	 * @param {string} [flags]
	 * @returns {string}
	 */
	Format(format, flags) {
	}

	/**
	 * <p>Returns a new <strong>Date</strong> object with the date converted from
	 *       UTC (based on the local time zone).</p>
	 * @returns {Date}
	 */
	FromUTC() {
	}

	/**
	 * <p>Resets the date to the current local date/time.</p>
	 *
	 */
	Reset() {
	}

	/**
	 * <p>Sets the value of this <strong>Date</strong> object to the supplied
	 *       date.</p>
	 * @param {Date} newdate
	 *
	 */
	Set(newdate) {
	}

	/**
	 * <p>Subtracts the specified value from the date. The parameters are the
	 *       same as for the <strong>Add</strong> method.</p>
	 * @param {int} value
	 * @param {string} type
	 *
	 */
	Sub(value, type) {
	}

	/**
	 * <p>Returns a new <strong>Date </strong>object with the date converted to
	 *       UTC (based on the local time zone).</p>
	 * @returns {Date}
	 */
	ToUTC() {
	}
} //end class
