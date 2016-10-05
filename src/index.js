/*
 * react-timer
 *
 * handle show time format
 * 
 * format just like moment format function
 *
 * todo 1. add offset attribte to custom show
 * 
 */
import React from 'react';
const FORMAT_REG = /(YYYY|YYY|YY|Y|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|.)/g;

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Time';
    }
    formatTime(){
    	const {value='',format} = this.props;

    	return Time.format(value,format);
    }
    render() {
    	const {value,format,...props} = this.props;

        return <span {...props}>{this.formatTime()}</span>;
    }
}

//time format
Time.format = function(value,format ='YYYY-MM-DD hh:mm:ss'){
	var ReplaceFunction = {};

	if(!value){
		return '';
	}
	if(typeof value!=='object'){
		value = new Date(value);
	}

	var matchResult =format.match(FORMAT_REG);

	if(matchResult){
		return matchResult.map(function(item,index){
			if(!ReplaceFunction[item]){
				ReplaceFunction[item] = createReplaceFunction(item);
			}

			return ReplaceFunction[item]();
		}).join('');
	}

	return format;
	
	//create replace function
	function createReplaceFunction(format){
		return function(){
			switch(format){
				case "YYYY":
					return getYear(4);
				;
				case "YYY":
					return getYear(3);
				;
				case "YY":
					return getYear(2);
				;
				case "Y":
					return getYear(1);
				;
				case "MM":
					return getMonth(2);
				;
				case "M":
					return getMonth(1);
				;
				case "DD":
					return getDay(2);
				;
				case "D":
					return getDay(1);
				;
				case "hh":
					return getHour(2);
				;
				case "h":
					return getHour(1);
				;
				case "HH":
					return getHour(2);
				;
				case "H":
					return getHour(1);
				;
				case "mm":
					return getMinute(2);
				;
				case "m":
					return getMinute(1);
				;
				case "ss":
					return getSecond(2);
				;
				case "s":
					return getSecond(1);
				;
				default:
					return format;
				;
			}			
		}

		function getYear(num){
			var reg = new RegExp('^[0-9]{'+(4-num)+'}');

			return (value.getFullYear()+"").replace(reg,'')
		}

		function getMonth(num){
			var month = value.getMonth()+1;

			return getFormattedValue(month,num)
		}

		function getDay(num){
			var day = value.getDate();

			return getFormattedValue(day,num);
		}
		function getHour(num){
			var hour = value.getHours();

			return getFormattedValue(hour,num);
		}
		function getMinute(num){
			var hour = value.getMinutes();

			return getFormattedValue(hour,num);
		}
		function getSecond(num){
			var seconds = value.getSeconds();

			return getFormattedValue(seconds,num);
		}


		function getFormattedValue(value,num){
			if(num===1){
				return value;
			}else{
				return fillZero(value);
			}
		}

		function fillZero(num){
			return num>=10?num:("0"+num);
		}
	}
}

export default Time;