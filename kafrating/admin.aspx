<%@ Page Language="C#" AutoEventWireup="true" CodeFile="admin.aspx.cs" Inherits="kafrating_admin" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="css/style.css" type="text/css"/>
	<link rel="stylesheet" href="css/framework.css" type="text/css"/>
    <title>Рейтинг кафедр | СКГМИ</title>
</head>
<body class="g">
    <div class="header f-bwi g-row">
        <div class="logo_back f-bwi-pic">
            <a class="logo_a" href="http://rating.skgmi-gtu.ru/">
                <img class="logo_img" alt="Вернуться на сайт СКГМИ" src="img/Logo0000.png" />
            </a>		            
        </div>
        <div class="header_head f-bwi-text">            
		
            <h5>ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ</h5>            
			<h3 class="logo_skgmi">"Северо-Кавказский горно-металлургический институт (ГТУ)"</h3>
            <h1 class="logo_rait">Рейтинг кафедр | Ввод данных</h1>
			</div>        
    </div>

    <form id="form1" runat="server">
    <div class="g-row">
    <i class="warning">Выберите файл для импорта! </i>
    <asp:FileUpload ID="FileUpload1" runat="server" />
    <br />
        <ul class="menuBTN">
            <li><asp:Button class="f-bu" runat="server" Text="Импортировать файл критериев" 
                    onclick="Unnamed1_Click" /></li>
            <li><button class="f-bu">Текст</button></li>
            <li><button class="f-bu">Текст</button></li>
            <li><button class="f-bu">Закрыть</button></li>
        </ul>

        <div class="g-12">
        
            <asp:GridView ID="GridView1" runat="server" BackColor="White" 
                BorderColor="#CCCCCC" BorderStyle="None" BorderWidth="1px" CellPadding="4" 
                EnableModelValidation="True" ForeColor="Black" GridLines="Horizontal">
                <FooterStyle BackColor="#CCCC99" ForeColor="Black" />
                <HeaderStyle BackColor="#333333" Font-Bold="True" ForeColor="White" />
                <PagerStyle BackColor="White" ForeColor="Black" HorizontalAlign="Right" />
                <SelectedRowStyle BackColor="#CC3333" Font-Bold="True" ForeColor="White" />
            </asp:GridView>
        </div>
    </div>
    </form>
</body>
</html>
