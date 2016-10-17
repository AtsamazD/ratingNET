<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="kafrating_login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link rel="stylesheet" href="css/framework.css" type="text/css" />
    <title>Рейтинг кафедр | СКГМИ</title>
    <style type="text/css">
        #filesList {
            vertical-align: top;
        }

        .divBlock {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 5px;
        }
    </style>
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
    <form id="form1" runat="server" class="g-row">
        <div id="loginForm" class="g-row">            
            <div class="divBlock g-12">
                <h1>1</h1>
                <h2>Выберите файл с критериями</h2>
                <asp:FileUpload ID="FileUpload1" runat="server" />
                <asp:Button ID="Button1" CssClass="f-bu" runat="server" Text="Загрузить" OnClick="Button1_Click" />&nbsp<asp:Label ID="UploadStatus" runat="server" Text=""></asp:Label>
            </div>
            <div class="divBlock g-row">                
                <div class="g-7">
                    <h1>2</h1>
                    <h4>Список файлов на сервере</h4>
                    <asp:ListBox ID="filesList" runat="server" Height="100px" CssClass="g-7">
                        <asp:ListItem Value="crit" Text="criterion"></asp:ListItem>
                        <asp:ListItem Value="my" Text="mylist"></asp:ListItem>
                    </asp:ListBox>                    
                    <asp:Button ID="xlsButton" CssClass="f-bu" runat="server" Text="Подгрузить листы" OnClick="xlsButton_Click" />
                </div>
                <div class="g-5">
                    <h1>3</h1>
                    <h4>Листы выбранного файла</h4>
                    <asp:ListBox ID="listOfEx" runat="server" Height="100px" CssClass="g-5"></asp:ListBox>
                    <asp:Button ID="loadFromListButt" CssClass="f-bu" runat="server" OnClick="loadFromListButt_Click" Text="Подгрузить данные листа" />
                </div>                                
            </div>
            <br />
            <hr />            
            <br />
            <asp:Label ID="ListName" runat="server" Font-Size="18pt"></asp:Label>
            <asp:GridView ID="GridView1" runat="server" OnRowEditing="GridView1_RowEditing" OnRowUpdating="GridView1_RowUpdating">
            </asp:GridView>

            <hr />
            <asp:Label ID="infoLabel" runat="server" Text="Техническая информация: " Font-Names="Consolas"></asp:Label>
            <br />
            <asp:TextBox ID="infoBox" TextMode="MultiLine" CssClass="g-12" runat="server" Height="100px" Font-Names="Consolas" ReadOnly="True"></asp:TextBox>
        </div>
        <hr />

        <a href="index.html">Выход</a>
    </form>
</body>
</html>
