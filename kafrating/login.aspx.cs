using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

using Excel = Microsoft.Office.Interop.Excel;
using System.Data;

public partial class kafrating_login : System.Web.UI.Page
{
    string s1 = @"D:\wwwroot\Rating\upload\", s2 = @"D:\Документы\Rating.net\upload\";
    string[] files;
    DataTable dt = new DataTable();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            Session["Table"] = dt;
            BindData();
            Page.EnableViewState = true;
        }
        else
        {
            
        }
        loadList(s2);
    }

    public DataTable GetDataTableFromCache()
    {
        DataTable dt = HttpContext.Current.Cache["DT"] as DataTable;
        return dt;
    }
    void MSG(string msg)
    {
        infoBox.Text += DateTime.Now.Hour.ToString("00") + ":" + DateTime.Now.Minute.ToString("00") + ":" + DateTime.Now.Second.ToString("00") + "  " + msg + Environment.NewLine;
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        string savePath = s2;

        if (FileUpload1.HasFile)
        {
            try
            {
                string filename = FileUpload1.FileName;
                if ((Path.GetExtension(filename) == ".xlsx") || (Path.GetExtension(filename) == ".xls"))
                {
                    savePath += filename;
                    FileUpload1.SaveAs(savePath);
                    loadList(s2);
                }
                else
                    MSG("Выбранный файл не имеет расширения .xlsx или .xls!");
            }
            catch (Exception msg)
            {
                MSG(msg.Message);
            }
        }
        else
            UploadStatus.Text = "Не указан файл для загрузки!";
    }



    protected void xlsButton_Click(object sender, EventArgs e)
    {
        try
        {
            Excel.Application xlApp;
            Excel.Workbook xlWorkBook;
            Excel.Worksheet xlWorkSheet;
            Excel.Range ShtRange;

            object misValue = System.Reflection.Missing.Value;

            xlApp = new Excel.Application();
            xlWorkBook = xlApp.Workbooks.Open(s2 + filesList.Items[filesList.SelectedIndex + 1].Text, 0, true, 5, "", "", true, Microsoft.Office.Interop.Excel.XlPlatform.xlWindows, "\t", false, false, 0, true, 1, 0);
            xlWorkSheet = (Excel.Worksheet)xlWorkBook.Worksheets.get_Item(1);

            ShtRange = xlWorkSheet.UsedRange;

            for (int Cnum = 1; Cnum <= ShtRange.Columns.Count; Cnum++)
            {
                dt.Columns.Add(
                   new DataColumn((ShtRange.Cells[1, Cnum] as Excel.Range).Value2.ToString()));
            }
            dt.AcceptChanges();

            string[] columnNames = new String[dt.Columns.Count];
            for (int i = 0; i < dt.Columns.Count; i++)
            {
                columnNames[0] = dt.Columns[i].ColumnName;
            }

            for (int Rnum = 2; Rnum <= ShtRange.Rows.Count; Rnum++)
            {
                DataRow dr = dt.NewRow();
                for (int Cnum = 1; Cnum <= ShtRange.Columns.Count; Cnum++)
                {
                    if ((ShtRange.Cells[Rnum, Cnum] as Excel.Range).Value2 != null)
                    {
                        dr[Cnum - 1] =
            (ShtRange.Cells[Rnum, Cnum] as Excel.Range).Value2.ToString();
                    }
                }
                dt.Rows.Add(dr);
                dt.AcceptChanges();
            }

            GridView1.DataSource = dt;
            GridView1.DataBind();

            HttpContext.Current.Cache.Insert("DT", dt);

            xlApp.Quit();

            releaseObject(xlWorkSheet);
            releaseObject(xlWorkBook);
            releaseObject(xlApp);
        }
        catch (Exception msg)
        {
            MSG(msg.Message);
        }
    }

    private void releaseObject(object obj)
    {
        try
        {
            System.Runtime.InteropServices.Marshal.ReleaseComObject(obj);
            obj = null;
        }
        catch (Exception ex)
        {
            obj = null;
            MSG("Unable to release the Object " + ex.ToString());
        }
        finally
        {
            GC.Collect();
        }
    }

    void loadList(string path)
    {
        try
        {
            filesList.Items.Clear();
            files = Directory.GetFiles(path);
            filesList.Width = 200;
            filesList.Height = 100;
            for (int i = 0; i < files.Length; i++)
                filesList.Items.Add(Path.GetFileName(files[i]));
        }
        catch (Exception msg)
        {
            MSG(msg.Message);
        }
    }

    protected void GridView1_RowEditing(object sender, GridViewEditEventArgs e)
    {
        GridView1.EditIndex = e.NewEditIndex;
        BindData();
    }

    private void BindData()
    {
        GridView1.DataSource = Session["Table"];
        GridView1.DataBind();
    }
    protected void GridView1_RowUpdating(object sender, GridViewUpdateEventArgs e)
    {

    }
    protected void GridView1_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
    {
        e.Cancel = true;
        GridView1.EditIndex = -1;
        BindData();
    }
}