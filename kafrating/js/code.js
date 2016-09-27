function graphic_asf() {
            $('#graphic_asf').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Архитектурно-строительный факультет',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    title: {
                        text: 'Год',
                        style: {
                            fontWeight: 'bold',
                        }
                    },

                    categories: ['2010', '2011', '2012', '2013', '2014', '2015'],
                    labels: {
                        style: {
                            fontWeight: 'bold'
                        }
                    }
                },
                yAxis: {
                    labels: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    max: 8,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг',
                        style: {
                            fontWeight: 'bold'
                        },
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'АДА',
                    data: [4, 4, 4, 5, 3, 5]
                }, {
                    name: 'АРХ',
                    data: [1, 1, 2, 2, 2, 3]
                }, {
                    name: 'НГиЧ',
                    data: [7, 8, 5, 4, 5, 7]
                }, {
                    name: 'ОБДД',
                    data: [2, 3, 1, 1, 1, 2]
                }, {
                    name: 'РГиГ',
                    data: [8, 7, 8, 8, 8, 8]
                }, {
                    name: 'СК',
                    data: [5, 6, 7, 7, 6, 4]
                }, {
                    name: 'СМиСМ',
                    data: [6, 5, 6, 6, 7, 6]
                }, {
                    name: 'СП',
                    data: [3, 2, 3, 3, 4, 1]
                }]
            });
        };
        function graphic_ggf() {
            $('#graphic_ggf').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Горно-геологический факультет',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015']
                },
                yAxis: {
                    max: 5,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг'
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'БЖД',
                    data: [4, 4, 4, 4, 2, 4]
                }, {
                    name: 'ГД',
                    data: [1, 1, 1, 2, 1, 1]
                }, {
                    name: 'Математика',
                    data: [5, 5, 5, 5, 5, 5]
                }, {
                    name: 'ПГ',
                    data: [2, 3, 3, 3, 3, 3]
                }, {
                    name: 'ЭиТБ',
                    data: [3, 2, 2, 1, 4, 2]
                }]
            });
        };
        function graphic_mf() {
            $('#graphic_mf').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Металлургический факультет',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015']
                },
                yAxis: {
                    max: 4,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг'
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'МЦМ',
                    data: [1, 3, 3, 3, 1, 1]
                }, {
                    name: 'ОПИ',
                    data: [3, 1, 2, 2, 4, 4]
                }, {
                    name: 'ТАМПиП',
                    data: [4, 2, 1, 1, 2, 2]
                }, {
                    name: 'ТХОМ',
                    data: [2, 4, 4, 4, 3, 3]
                }]
            });
        };
        function graphic_fit() {
            $('#graphic_fit').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Факультет информационных технологий',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015']
                },
                yAxis: {
                    max: 4,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг'
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'АОИ',
                    data: [2, 1, 1, 1, 1, 1]
                }, {
                    name: 'Информатика',
                    data: [4, 4, 4, 4, 4, 4]
                }, {
                    name: 'ИС',
                    data: [1, 2, 2, 2, 2, 2]
                }, {
                    name: 'САПР',
                    data: [3, 3, 3, 3, 3, 3]
                }]
            });
        };
        function graphic_fpp() {
            $('#graphic_fpp').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Факультет пищевых производств',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015']
                },
                yAxis: {
                    max: 3,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг'
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'ТБП',
                    data: [2, 2, 2, 2, 2, 2]
                }, {
                    name: 'ТПОП',
                    data: [1, 1, 1, 1, 1, 1]
                }, {
                    name: 'Химия',
                    data: [3, 3, 3, 3, 3, 3]
                }]
            });
        };
        function graphic_fet() {
            $('#graphic_fet').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Факультет электронной техники',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015']
                },
                yAxis: {
                    max: 3,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг'
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'ПЭ',
                    data: [1, 3, 3, 2, 3, 2]
                }, {
                    name: 'Физика',
                    data: [3, 2, 2, 3, 2, 3]
                }, {
                    name: 'ЭП',
                    data: [2, 1, 1, 1, 1, 1]
                }]
            });
        };
        function graphic_ef() {
            $('#graphic_ef').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Экономический факультет',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015']
                },
                yAxis: {
                    max: 7,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг'
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'БУА',
                    data: [3, 5, 5, 5, 5, 4]
                }, {
                    name: 'История',
                    data: [7, 4, 7, 6, 4, 6]
                }, {
                    name: 'НН',
                    data: [6, 6, 4, 4, 6, 5]
                }, {
                    name: 'ОПиЭП',
                    data: [4, 7, 1, 1, 1, 2]
                }, {
                    name: 'ФК',
                    data: [2, 2, 3, 3, 3, 3]
                }, {
                    name: 'ЭТ',
                    data: [5, 3, 6, 7, 7, 7]
                }, {
                    name: 'ЭУП',
                    data: [1, 1, 2, 2, 2, 1]
                }]
            });
        };
        function graphic_emf() {
            $('#graphic_emf').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Электромеханический факультет',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015']
                },
                yAxis: {
                    max: 5,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг'
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'ДМ',
                    data: [5, 5, 3, 4, 3, 5]
                }, {
                    name: 'ТМО',
                    data: [2, 1, 1, 2, 1, 1]
                }, {
                    name: 'ТЭиЭМ',
                    data: [4, 4, 4, 3, 4, 4]
                }, {
                    name: 'ЭА',
                    data: [3, 3, 5, 5, 5, 3]
                }, {
                    name: 'ЭПП',
                    data: [1, 2, 2, 1, 2, 2]
                }]
            });
        };
        function graphic_uf() {
            $('#graphic_uf').highcharts({
				chart: {
					width: 600
				},
                title: {
                    text: 'Юридический факультет',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Кафедры',
                    x: -20
                },
                xAxis: {
                    categories: ['2010', '2011', '2012', '2013', '2014', '2015']
                },
                yAxis: {
                    max: 8,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Рейтинг'
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: 'ГПиП',
                    data: [4, 2, 4, 3, 2, 3]
                }, {
                    name: 'ИЯ',
                    data: [7, 6, 5, 6, 7, 7]
                }, {
                    name: 'КиАП',
                    data: [1, 1, 1, 1, 1, 1]
                }, {
                    name: 'ПиТП',
                    data: [5, 3, 3, 4, 4, 2]
                }, {
                    name: 'ТиИГиП',
                    data: [2, 5, 2, 2, 3, 4]
                }, {
                    name: 'УПиП',
                    data: [3, 7, 8, 8, 5, 5]
                }, {
                    name: 'ФВиС',
                    data: [8, 8, 7, 7, 8, 8]
                }, {
                    name: 'ФиН',
                    data: [6, 4, 6, 5, 6, 6]
                }]
            });
        };

        function info_graphic(dep_name, arrayOfVUZ, arrayOfFak) {
            $('#info_graphic').highcharts({
                title: {
                    text: 'Статистика',
                    x: -20 //center
                },
                subtitle: {
                    text: fak,
                    x: -20
                },
                xAxis: {
                    title: {
                        text: 'Год',
                        style: {
                            fontWeight: 'bold',
                        }
                    },

                    categories: ['2010', '2011', '2012', '2013', '2014', '2015'],
                    labels: {
                        style: {
                            fontWeight: 'bold'
                        }
                    }
                },
                yAxis: {
                    labels: {
                        style: {
                            fontWeight: 'bold'
                        }
                    },
                    max: Math.max.apply(null, arrayOfVUZ)+1,
                    min: 1,
                    reversed: true,
                    title: {
                        text: 'Место',
                        style: {
                            fontWeight: 'bold'
                        },
                    },
                    tickInterval: 1,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '',
                    crosshairs: false
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    name: dep_name + '(по ВУЗу)',
                    data: [Number(arrayOfVUZ[0]), Number(arrayOfVUZ[1]), Number(arrayOfVUZ[2]), Number(arrayOfVUZ[3]), Number(arrayOfVUZ[4]), Number(arrayOfVUZ[5])]
                },
                {
                    name: dep_name + '(по факультету из ' + dep_count_in_fak + ' кафедр)',
                    data: [Number(arrayOfFak[0]), Number(arrayOfFak[1]), Number(arrayOfFak[2]), Number(arrayOfFak[3]), Number(arrayOfFak[4]), Number(arrayOfFak[5])]
                }]
            });
        }

        function selectYear() {
            var select_year = document.getElementById('select_year');
            var year = select_year.options[select_year.selectedIndex].text;
            var obj = document.getElementById('selYear');
            deleteRow('table_rait');
			infunc("table_rait");
            //cells_color();
            switch (year) {
                case '2015':
                    obj.innerHTML = 'Общий интегральный рейтинг кафедр по данным 2015 года';

                    document.getElementById('t2015').style.display = "block";
                    document.getElementById('t2014').style.display = "none";
                    document.getElementById('t2013').style.display = "none";
                    document.getElementById('t2012').style.display = "none";
                    document.getElementById('t2011').style.display = "none";
                    document.getElementById('t2010').style.display = "none";
                    break;
                case '2014':
                    obj.innerHTML = 'Общий интегральный рейтинг кафедр по данным 2014 года';

                    document.getElementById('t2014').style.display = "block";
                    document.getElementById('t2015').style.display = "none";
                    document.getElementById('t2013').style.display = "none";
                    document.getElementById('t2012').style.display = "none";
                    document.getElementById('t2011').style.display = "none";
                    document.getElementById('t2010').style.display = "none";
                    break;
                case '2013':
                    obj.innerHTML = 'Общий интегральный рейтинг кафедр по данным 2013 года';

                    document.getElementById('t2013').style.display = "block";
                    document.getElementById('t2014').style.display = "none";
                    document.getElementById('t2015').style.display = "none";
                    document.getElementById('t2012').style.display = "none";
                    document.getElementById('t2011').style.display = "none";
                    document.getElementById('t2010').style.display = "none";
                    break;
                case '2012':
                    obj.innerHTML = 'Общий интегральный рейтинг кафедр по данным 2012 года';

                    document.getElementById('t2012').style.display = "block";
                    document.getElementById('t2014').style.display = "none";
                    document.getElementById('t2013').style.display = "none";
                    document.getElementById('t2015').style.display = "none";
                    document.getElementById('t2011').style.display = "none";
                    document.getElementById('t2010').style.display = "none";
                    break;
                case '2011':
                    obj.innerHTML = 'Общий интегральный рейтинг кафедр по данным 2011 года';

                    document.getElementById('t2011').style.display = "block";
                    document.getElementById('t2014').style.display = "none";
                    document.getElementById('t2013').style.display = "none";
                    document.getElementById('t2012').style.display = "none";
                    document.getElementById('t2015').style.display = "none";
                    document.getElementById('t2010').style.display = "none";
                    break;
                case '2010':
                    obj.innerHTML = 'Общий интегральный рейтинг кафедр по данным 2010 года';

                    document.getElementById('t2010').style.display = "block";
                    document.getElementById('t2014').style.display = "none";
                    document.getElementById('t2013').style.display = "none";
                    document.getElementById('t2012').style.display = "none";
                    document.getElementById('t2011').style.display = "none";
                    document.getElementById('t2015').style.display = "none";
                    break;
                default:
					
                    break;
            }
        }

function selectChangeProg(fak){
	switch (fak){
	case 'p_asf':
		$(".table_rait_prog").css("display", "none");
		$("#p_asf").css("display", "block");
		break;		
	case 'p_ggf':
		$(".table_rait_prog").css("display", "none");
		$("#p_ggf").css("display", "block");
		break;
	case 'p_mf':
		$(".table_rait_prog").css("display", "none");
		$("#p_mf").css("display", "block");
		break;
	case 'p_fit':
		$(".table_rait_prog").css("display", "none");
		$("#p_fit").css("display", "block");
		break;
	case 'p_fpp':
		$(".table_rait_prog").css("display", "none");
		$("#p_fpp").css("display", "block");
		break;
	case 'p_fet':
		$(".table_rait_prog").css("display", "none");
		$("#p_fet").css("display", "block");
		break;	
	case 'p_emf':
		$(".table_rait_prog").css("display", "none");
		$("#p_emf").css("display", "block");
		break;
	case 'p_ef':
		$(".table_rait_prog").css("display", "none");
		$("#p_ef").css("display", "block");
		break;
	case 'p_uf':
		$(".table_rait_prog").css("display", "none");
		$("#p_uf").css("display", "block");
		break;
	default:
		break;
	}
}
		
function selectChange(fak){
	switch (fak){
		case 'asf':
			$(".graphic").css("display", "none");
			$("#graphic_asf").css("display", "block");
			graphic_asf();
			break;		
		case 'ggf':
			$(".graphic").css("display", "none");
			$("#graphic_ggf").css("display", "block");
			graphic_ggf();
			break;			
		case 'ef':
			$(".graphic").css("display", "none");
			$("#graphic_ef").css("display", "block");
			graphic_ef();
			break;			
		case 'emf':
			$(".graphic").css("display", "none");
			$("#graphic_emf").css("display", "block");
			graphic_emf();
			break;
		case 'fpp':
			$(".graphic").css("display", "none");
			$("#graphic_fpp").css("display", "block");
			graphic_fpp();
			break;
		case 'fit':
			$(".graphic").css("display", "none");
			$("#graphic_fit").css("display", "block");
			graphic_fit();
			break;
		case 'fet':
			$(".graphic").css("display", "none");
			$("#graphic_fet").css("display", "block");
			graphic_fet();
			break;
		case 'mf':
			$(".graphic").css("display", "none");
			$("#graphic_mf").css("display", "block");
			graphic_mf();
			break;
		case 'uf':
			$(".graphic").css("display", "none");
			$("#graphic_uf").css("display", "block");
			graphic_uf();
			break;
		default:
		
			break;
	}
}
		
function yearClick(year) {
            var obj = document.getElementById('selYear');						
            switch (year) {
                case 'ratings_link':    
					$("#menu li").removeClass('active');
					$("#rate").addClass('active');   
					
                    $("#ratingOnFak").css("display", "block");
                    $("#statistic").css("display", "none");
                    $("#progn").css("display", "none");
                    $("#container_for_graphics").css("display", "none");
					$("#adminForm").css("display", "none");
					
                    break;
					
                case 'ygraph_link':
                    graphic_asf();
                    
					$("#menu li").removeClass('active');
					$("#graph").addClass('active');
					
                    $("#ratingOnFak").css("display", "none");
					$("#container_for_graphics").css("display", "block");
                    $("#progn").css("display", "none");
                    $("#statistic").css("display", "none");
                    $("#adminForm").css("display", "none");
					
                    break;
                case 'yprogn_link':                    
					$("#menu li").removeClass('active');
					$("#prog").addClass('active');
					
                    $("#progn").css("display", "block");
                    $("#ratingOnFak").css("display", "none");
                    $("#container_for_graphics").css("display", "none");
                    $("#statistic").css("display", "none");
					$("#adminForm").css("display", "none");
					
                    break;
                case 'stat_link':                    
					$("#menu li").removeClass('active');
					$("#stati").addClass('active');
					
                    $("#statistic").css("display", "block");
                    $("#progn").css("display", "none");
                    $("#ratingOnFak").css("display", "none");
                    $("#container_for_graphics").css("display", "none");
					$("#adminForm").css("display", "none");
					
                    break;
				case 'admin_link':
					$("#menu li").removeClass('active');
					$("#admin").addClass('active');
					
                    $("#adminForm").css("display", "block");
                    $("#progn").css("display", "none");
                    $("#ratingOnFak").css("display", "none");
                    $("#container_for_graphics").css("display", "none");
					$("#statistic").css("display", "none");
					$(".footer").css("display", "none");
					
                    break;
                default:

                    break;
            }
        }

        window.onload = function () {
            //document.getElementById('ratings').style.backgroundColor = "#7884D0";
            //cells_color();
			infunc("table_rait");
        }

        function cells_color() {
            var select_year = document.getElementById('select_year');
            var year = select_year.options[select_year.selectedIndex].text;
            var table = document.getElementById('t' + year);
            for (var i = 0; i < table.rows.length; i++) {               
                switch (table.rows[i].cells[2].innerHTML) {
                    case 'Архитектурно-строительный факультет':
                        table.rows[i].cells[2].style.backgroundColor = "#8085E9";
                        break;
                    case 'Горно-геологический факультет':
                        table.rows[i].cells[2].style.backgroundColor = "#F15C80";
                        break;
                    case 'Факультет информационных технологий':
                        table.rows[i].cells[2].style.backgroundColor = "#7CB5EC";
                        break;
                    case 'Факультет пищевых производств':
                        table.rows[i].cells[2].style.backgroundColor = "#2B908F";
                        break;
                    case 'Факультет электронной техники':
                        table.rows[i].cells[2].style.backgroundColor = "#90ED7D";
                        break;
                    case 'Металлургический факультет':
                        table.rows[i].cells[2].style.backgroundColor = "#E4D354";
                        break;
                    case 'Электромеханический факультет':
                        table.rows[i].cells[2].style.backgroundColor = "#434348";
                        table.rows[i].cells[2].style.color = "#eee";
                        break;
                    case 'Юридический факультет':
                        table.rows[i].cells[2].style.backgroundColor = "#F7A35C";
                        break;
                    case 'Экономический факультет':
                        table.rows[i].cells[2].style.backgroundColor = "#F45B5B";
                        break;
                    default:

                        break;
                }//switch
            }//for
        }

        function dep_li_remove() {
            var dep_label = $('#dep_label')[0];
            var dep_list = $('#dep_list')[0];
            if (dep_list.childElementCount != 0) {
                while (dep_list.childElementCount != 0)
                    dep_list.removeChild(dep_list.children[0]);
                dep_label.innerHTML = '';
            }
        }

        function dep_select(li_inner) {
            dep_li_remove();
            var dep_list = $('#dep_list');
            var table = $('#t2010');
            dep_big_name.innerHTML = 'Сводка по кафедре ' + li_inner + ':';
            search_in_years(li_inner);

            var arrayOfPointInVUZ = [];
            var arrayOfPointInFak = [];
            for (var k = 1; k < dep_info_table.rows.length; k++) {
                arrayOfPointInVUZ[k - 1] = dep_info_table.rows[k].cells[1].innerHTML;
                arrayOfPointInFak[k - 1] = dep_info_table.rows[k].cells[2].innerHTML;
            }
            info_graphic(li_inner, arrayOfPointInVUZ, arrayOfPointInFak);
        }
        
        var dep_count_in_fak;
        var fak;

        function search_in_years(dep_name) {
            var date = new Date();

            var dep_list = document.getElementById('dep_list');
            var new_li = document.createElement('li');
            var dep_info_table = document.getElementById('dep_info_table');
            var graphic = document.getElementById('info_graphic');
            dep_info_table.style.display = 'block';
            graphic.style.display = 'block';

            var row, cell_1, cell_2, cell_3;
            var rowCount = dep_info_table.rows.length;
            fak = null;
            var year = date.getFullYear();
            var year_count = year - 2010;
            var table = '';
            
            var infak = [];

            dep_count_in_fak = 0;
            for (var i = 0; i < year_count; i++) {
                table = 't201' + i;
                table = document.getElementById(table);
                for (var j = 1; j < table.rows.length; j++)
                    if (table.rows[j].cells[1].innerHTML.toString() == dep_name) {
                        if (fak == null)
                            fak = table.rows[j].cells[2].innerHTML;
                        rowCount = dep_info_table.rows.length;
                        row = dep_info_table.insertRow(rowCount);
                        cell_1 = row.insertCell(0);
                        cell_1.innerHTML = table.id.slice(1, table.id.length);
                        cell_2 = row.insertCell(1);
                        cell_2.innerHTML = table.rows[j].cells[0].innerHTML;
                        break;
                    }
                var infakTemp = [];
                var index = 0;
                for (var d = 1; d < table.rows.length; d++)
                    if (table.rows[d].cells[2].innerHTML.toString() == fak) {
                        infakTemp[index] = table.rows[d].cells[1].innerHTML;
                        index++;
                    }
                if (dep_count_in_fak == 0)
                    dep_count_in_fak = infakTemp.length;
                for (var b = 0; b < infakTemp.length; b++)
                    if (infakTemp[b] == dep_name) {
                        infak[i] = b + 1;
                        break;
                    }
            }
            var tempRow;
            for (var w = 1; w < dep_info_table.rows.length; w++) {
                tempRow = dep_info_table.rows[w];
                cell_3 = tempRow.insertCell(2);
                cell_3.innerHTML = infak[w - 1];
            }
        }

        function all_dep_load() {
            dep_li_remove();
            if (dep_info_table.rows.length > 1)
                deleteRow('dep_info_table');
            dep_big_name.innerHTML = '';

            var arrayOfDep = [];

            var table = document.getElementById('t2010');
            var dep_list = document.getElementById('dep_list');
            var new_li = document.createElement('li');
            for (var i = 1; i < table.rows.length; i++) {
                arrayOfDep[i - 1] = table.rows[i].cells[1].innerHTML;
            }
            arrayOfDep.sort();
            for (var v = 0; v < arrayOfDep.length; v++)
            {
                new_li = document.createElement('li');
                new_li.innerHTML = arrayOfDep[v];
                new_li.setAttribute('onclick', 'dep_select(this.innerHTML)');
                dep_list.appendChild(new_li);//, dep_list.lastChild);
            }
            dep_info_table.style.display = 'none';
            var graphic = document.getElementById('info_graphic');
            graphic.style.display = 'none';
        }

        function live_search() {
            var dep_table = document.getElementById('dep_info_table');
            if (dep_table.rows.length > 1)
                deleteRow('dep_info_table');
            var dep_list = document.getElementById('dep_list');
            var dep_edit = document.getElementById('dep_name_edit').value.toString();
            var dep_label = document.getElementById('dep_label');
            var new_li = document.createElement('li');
            var table = document.getElementById('t2010');
            var graphic = document.getElementById('info_graphic');

            var dep_info_table = document.getElementById('dep_info_table');
            if (dep_info_table.style.display == 'block') {
                dep_info_table.style.display = 'none';
                graphic.style.display = 'none';
            }
            dep_big_name.innerHTML = '';

            dep_li_remove();

            if (dep_edit != '') {
                for (var i = 1; i < table.rows.length; i++) {
                    if ((table.rows[i].cells[2].innerHTML.indexOf(dep_edit) != -1) || (table.rows[i].cells[1].innerHTML.indexOf(dep_edit) != -1)) {
                        new_li = document.createElement('li');
                        new_li.innerHTML = table.rows[i].cells[1].innerHTML;
                        new_li.setAttribute('onclick', 'dep_select(this.innerHTML)');
                        dep_list.insertBefore(new_li, dep_list.lastChild);
                    }
                }
            }
            dep_label.innerHTML = 'Найдено ' + dep_list.childElementCount + ' совпадений';
        }


        function fillsmall(tableID) {
            deleteRow(tableID);

            //Выбор факультета
            var select_list = document.getElementById('select_fak');
            var selected_id = select_list.selectedIndex;
            var fak = select_list.options[selected_id].text;

            //Выбор года
            var select_year = document.getElementById('select_year');
            var selected_year_id = select_year.selectedIndex;
            var year = select_year.options[selected_year_id].text;
            var bigtable = document.getElementById('t' + year);
            var raittable = document.getElementById(tableID);
            var rowCount = raittable.rows.length;
            var row, cell_1, cell_2, index, x;
            index = 1;
            for (var i = 1; i < bigtable.rows.length; i++) {
                x = 0;
                if (bigtable.rows[i].cells[2].innerHTML.indexOf(fak) != -1) {
                    x++;
                    rowCount = raittable.rows.length;
                    row = raittable.insertRow(rowCount);
                    cell_1 = row.insertCell(0);
                    cell_1.innerHTML = index;
                    cell_2 = row.insertCell(1);
                    cell_2.innerHTML = bigtable.rows[i].cells[1].innerHTML;
                    index++;
                }
            }
        }

/*
        window.addEventListener('click', function (e) {
            var element_txt = document.elementFromPoint(e.clientX, e.clientY).innerHTML;
            var table = document.getElementById('t2014');
            switch (element_txt) {
                case 'Архитектурно-строительный факультет':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                case 'Горно-геологический факультет':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                case 'Факультет информационных технологий':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                case 'Факультет пищевых производств':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                case 'Факультет электронной техники':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                case 'Металлургический факультет':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                case 'Электромеханический факультет':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                case 'Юридический факультет':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                case 'Экономический факультет':
                    var count;
                    var temp = element_txt + "\n\nМесто    Кафедра\n";
                    count = 0;
                    for (var i = 0; i < table.rows.length; i++) {
                        if (table.rows[i].cells[2].innerHTML == element_txt) {
                            temp = temp + "\n" + table.rows[i].cells[0].innerHTML + "  " + table.rows[i].cells[1].innerHTML;
                        }
                    }
                    alert(temp);
                    break;
                default:

                    break;
            }
        }, false);
*/
        function deleteRow(tableID) {
            try {
                var table = document.getElementById(tableID);
                var rowCount = table.rows.length;

                for (var i = 1; i < rowCount; i++) {
                    var row = table.rows[i];
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }
            }
            catch (e) {
                alert(e);
            }
        }

        function infunc(tableID) {
            deleteRow(tableID);
            fillsmall(tableID);
        }

        function height() {
            var back_ul = document.getElementById('backtogmi_forphone_ul');
            back_ul.style.height = "auto";
            back_ul.style.display = "block";
        }