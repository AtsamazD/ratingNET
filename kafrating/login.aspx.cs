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
    string globalSelectedNameOfList = "";
    DataTable dt = new DataTable();



    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            Session["Table"] = dt;
            BindData();
            Page.EnableViewState = true;
            loadList(s2);
        }
        else
        {
            if (Cache["Table"] != null)
                dt = Cache["Table"] as DataTable;
        }        
    }

    public DataTable GetDataTableFromCache()
    {
        DataTable dt = Cache["DT"] as DataTable;
        return dt;
    }

    public Excel.Worksheets GetWorksheetsFromCahce()
    {
        Excel.Worksheets xs = Cache["xlsLists"] as Excel.Worksheets;
        return xs;
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


    string[] listsOfExcel()
    {
        Excel.Application xlApp;
        Excel.Workbook xlWorkBook;
        Excel.Worksheet xlWorkSheet;

        string[] lists;
        try
        {
            object misValue = System.Reflection.Missing.Value;

            xlApp = new Excel.Application();
            xlWorkBook = xlApp.Workbooks.Open(s2 + filesList.Items[filesList.SelectedIndex].Text, 0, true, 5, "", "", true, Microsoft.Office.Interop.Excel.XlPlatform.xlWindows, "\t", false, false, 0, true, 1, 0);

            lists = new string[xlWorkBook.Worksheets.Count];
            for (int i = 1; i < xlWorkBook.Worksheets.Count; i++)
            {
                xlWorkSheet = (Excel.Worksheet)xlWorkBook.Worksheets.get_Item(i);
                lists[i - 1] = xlWorkSheet.Name;
            }

            if (xlWorkBook.Worksheets.Count == 1)   //если количество листов = 1, тогда загружем этот лист
            {
                xlWorkSheet = (Excel.Worksheet)xlWorkBook.Worksheets.get_Item(1);
                lists[0] = xlWorkSheet.Name;
            }

            xlApp.Quit();

            releaseObject(xlWorkBook);
            releaseObject(xlApp);
            return lists;
        }
        catch (Exception msg)
        {
            MSG(msg.Message);
            return lists = new string[1] { null };
        }
    }
    protected void xlsButton_Click(object sender, EventArgs e)
    {
        Excel.Application xlApp;
        Excel.Workbook xlWorkBook;
        Excel.Worksheet xlWorkSheet;

        try
        {
            object misValue = System.Reflection.Missing.Value;

            xlApp = new Excel.Application();
            xlWorkBook = xlApp.Workbooks.Open(s2 + filesList.Items[filesList.SelectedIndex].Text, 0, true, 5, "", "", true, Microsoft.Office.Interop.Excel.XlPlatform.xlWindows, "\t", false, false, 0, true, 1, 0);
            xlWorkSheet = (Excel.Worksheet)xlWorkBook.Worksheets.get_Item(1);
            //Cache["xlsLists"] = xlWorkBook.Worksheets;
            Cache["xlBook"] = xlWorkBook;


            #region Подгрузка списка листов
            string[] lists = listsOfExcel();
            listOfEx.DataSource = lists;
            try
            {
                listOfEx.DataBind();
            }
            catch (Exception msg)
            {
                //MSG(msg.Message);
            }
            #endregion
        }
        catch (Exception msg)
        {
            MSG(msg.Message);
        }
    }

    protected void loadFromListButt_Click(object sender, EventArgs e)
    {
        Excel.Workbook xlWorkBook = Cache["xlBook"] as Excel.Workbook;
        Excel.Worksheet xlWorkSheet;
        xlWorkSheet = (Excel.Worksheet)xlWorkBook.Worksheets.get_Item(listOfEx.SelectedIndex + 1);
        Excel.Range ShtRange;

        ShtRange = xlWorkSheet.UsedRange;

        string nameDT = "dt_" + xlWorkSheet.Name;
        Cache["globalSelectedNameOfList"] = nameDT;

        if (Cache.Get(nameDT) == null)
        {

            DataTable dt = new DataTable();

            try
            {
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
            }
            catch(Exception err){
                MSG(err.Message);
                DataTable dtemptable = new DataTable();
                GridView1.DataSource = dtemptable;
                GridView1.DataBind();
            }

            ListName.Text = "ВЫБРАН ФАЙЛ/ЛИСТ: " + xlWorkBook.Name + "/" + xlWorkSheet.Name;
            dt = returnCorrectDT(dt);

            GridView1.DataSource = dt;
            GridView1.DataBind();

            Cache[nameDT] = dt;
            releaseObject(xlWorkSheet);
        }
        else
        {
            GridView1.DataSource = Cache.Get(nameDT);
            GridView1.DataBind();
            ListName.Text = "ВЫБРАН ФАЙЛ/ЛИСТ: " + xlWorkBook.Name + "/" + xlWorkSheet.Name;
        }
        //xlApp.Quit();


        //releaseObject(xlWorkBook);
        //releaseObject(xlApp);
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

            for (int i = 0; i < files.Length; i++)
            {
                filesList.Items.Add(Path.GetFileName(files[i]));
            }
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
        try
        {
            DataTable dtemptable = new DataTable();
            string tempname = Cache.Get("globalSelectedNameOfList") as string; 
            if (Cache.Get(tempname) != null)
            {
                dtemptable = Cache[tempname] as DataTable;
                GridView1.DataSource = dtemptable;
                GridView1.DataBind();
            }
        }
        catch(Exception err){
            //MSG(err.Message);
        }
    }
    protected void GridView1_RowUpdating(object sender, GridViewUpdateEventArgs e)
    {
        string tempname = Cache.Get("globalSelectedNameOfList") as string;
        DataTable tempDT = Cache[tempname] as DataTable;
        tempDT.Rows[0][0] = "";
        GridView1.EditIndex = -1;
        BindData();
    }
    protected void GridView1_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
    {
        e.Cancel = true;
        GridView1.EditIndex = -1;
        BindData();
    }
    protected void GridView1_RowDeleting(object sender, GridViewDeleteEventArgs e)
    {
        DataTable dt = Cache["Table"] as DataTable;
        DataRow dr = dt.Rows[e.RowIndex];
        dt.Rows.Remove(dr);
        GridView1.EditIndex = -1;
        BindData();
    }

    DataTable returnCorrectDT(DataTable dt)
    {
        DeleteVoidRows(dt);
        return dt;
    }
    void DeleteVoidRows(DataTable dt)
    {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            if (dt.Rows[i].IsNull(dt.Columns[1]))
                dt.Rows.Remove(dt.Rows[i]);
        }

        int x = 0;
        for (int i = 0; i < dt.Rows.Count; i++)
        {
            if (dt.Rows[i].IsNull(dt.Columns[1]))
                x++;
        }
        if (x > 0)
            DeleteVoidRows(dt);
    }
    protected void xlsDel_Click(object sender, EventArgs e)
    {
        try
        {
            File.Delete(s2 + filesList.Items[filesList.SelectedIndex]);
            loadList(s2);
        }
        catch (Exception err)
        {
            MSG(err.Message);
        }
    }
}