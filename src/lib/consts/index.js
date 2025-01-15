import { CiCalculator2 } from "react-icons/ci";
import { HiMiniCalculator } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlinePercent } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { TbLineHeight } from "react-icons/tb";
import { FaWeightHanging } from "react-icons/fa";
import { IoScaleSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa6";



export const DASHBOARD_SIDEBAR_CALCULATOR = [
	{
		key: 'basiccal',
		label: 'Basic',
		path: '/basic-calculator',
		icon: <CiCalculator2 />
	},
	{
		key: 'advcal',
		label: 'Advanced',
		path: '/advanced-calculator',
		icon: <HiMiniCalculator />
	},
	{
		key: 'datediff',
		label: 'Date Calculation',
		path: '/date-calculation',
		icon: <MdDateRange />
	},
	{
		key: 'bmi',
		label: 'BMI',
		path: '/bmi-calculator',
		icon: <IoScaleSharp />
	},
	{
		key: 'tips',
		label: 'Tip Calculator',
		path: '/tip-calculator',
		icon: <MdAttachMoney />
	},
	{
		key: 'tax',
		label: 'Tax/ Percentage',
		path: '/tax-percentage',
		icon: <HiOutlineReceiptTax />
	},
]

export const DASHBOARD_SIDEBAR_CONVERTER = [
	{
		key: 'currency',
		label: 'Currency',
		path: '/currency-converter',
		icon: <MdCurrencyExchange />
	},
	{
		key: 'length',
		label: 'Length',
		path: '/length-converter',
		icon: <TbLineHeight />
	},
	{
		key: 'weight',
		label: 'Weight',
		path: '/weight-converter',
		icon: <FaWeightHanging />
	},
	{
		key: 'time',
		label: 'Time',
		path: '/time-converter',
		icon: <IoMdTime />
	},
	{
		key: 'data',
		label: 'Data',
		path: '/data-converter',
		icon: <FaDatabase />
	},
]
