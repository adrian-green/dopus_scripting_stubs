/**
 *The SysInfo object is created by the DOpusFactory.SysInfo method. It lets scripts access miscellaneous system information that may not be otherwise easy to obtain from a script.
 */
class SysInfo {
	/**
	 * <p>Allows you to test if a named process is currently running, and returns
	 *       the process's ID if so. If the process isn't running <strong>0</strong> is
	 *       returned. You can use wildcards or (by prefixing the pattern with
	 *       <strong>regex:</strong>) regular expressions.</p>
	 * @param {string} processname
	 * @returns {int}
	 */
	FindProcess(processname){}
	/**
	 * <p>If called with no arguments, returns a  {@link Rect}&nbsp;objects which provide
	 *       information about the positions and sizes of the display monitors in the
	 *       system.</p>
	 *       <p>If called with an index argument, returns a single <strong><a href="Rect.htm">Rect</a></strong> with the information for just a
	 *       particular monitor.</p>
	 *       <p>The <strong>WorkAreas</strong> method, documented below, is sometimes
	 *       what you should use instead of this.</p>
	 * @param {null|int} none_or_index
	 * @returns {Rect|Rect}
	 */
	Monitors(none_or_index){}
	/**
	 * <p>Returns the index of the monitor the mouse&nbsp;pointer is currently
	 *       positioned on.</p>
	 * @returns {int}
	 */
	MouseMonitor(){}
	/**
	 * <p>Returns the current x-coordinate of the mouse pointer.</p>
	 * @returns {int}
	 */
	MousePosX(){}
	/**
	 * <p>Returns the current y-coordinate of the mouse pointer.</p>
	 * @returns {int}
	 */
	MousePosY(){}
	/**
	 * <p>Returns a <strong><a href="Rect.htm">Rect</a></strong> giving the size
	 *       of the invisible border around windows.</p>
	 *       <p>On some operating systems (e.g. Windows 10), windows may be larger than
	 *       they appear: Beyond the visible edge is a border that is part of the
	 *       window but invisible. This border exists for legacy compatibility,
	 *       allowing window frames to appear thin while providing something thick
	 *       enough to resize with the mouse.</p>
	 *       <p>You can usually ignore the border but it is important when positioning
	 *       windows next to each other, or to screen edges, where ignoring it results
	 *       in gaps between windows.</p>
	 *       <p>The <strong>Rect</strong> returned by this method is unusual: The
	 *       <strong>left</strong>, <strong>right</strong>, <strong>top</strong> and
	 *       <strong>bottom</strong> properties do not represent the coordinates of a
	 *       rectangle but rather the width of borders (if any) on each side of a
	 *       window. As a consequence, the <strong>width</strong> and
	 *       <strong>height</strong> properties of the <strong>Rect</strong> are
	 *       meaningless.</p>
	 *       <p>On Windows 10, the top border is typically zero and the others are
	 *       usually several pixels thick. The thickness varies by OS version, system
	 *       DPI, and other factors; you should not store it to disk as it may not be
	 *       correct for the system that loads it.</p>
	 *       <p>This property is relatively expensive to calculate. You should not, for
	 *       example, call the method once for each side; instead, call it once and
	 *       store the <strong>Rect</strong> in a variable, then query that for each
	 *       side.</p>
	 * @returns {Rect}
	 */
	ShadowBorder(){}
	/**
	 * <p>Similar to the <strong>Monitors</strong> method, documented above,
	 *       except it returns the <em>work area</em> of each monitor rather than the
	 *       full monitor area.</p>
	 *       <p>A monitor's <em>work area</em> is the monitor's rectangle minus the
	 *       Windows Taskbar and any other <em>app bars</em> (which can include docked
	 *       toolbars created by Opus, or similar things added by other software). If a
	 *       monitor does not have a Taskbar or other app bar docked to it, its work
	 *       area will be the same as its full rectangle.</p>
	 * @param {null|int} none_or_index
	 * @returns {Rect|Rect}
	 */
	WorkAreas(none_or_index){}
} //end class
