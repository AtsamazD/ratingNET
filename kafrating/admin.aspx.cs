using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class kafrating_admin : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        GridView1.DataSource = CreateTable();
    }

    private DataTable CreateTable()
    {
        DataTable dt = new DataTable("Criterion");

        DataColumn colName = new DataColumn("Kaf", typeof(String));
        DataColumn colUspev = new DataColumn("Uspev", typeof(Int32));
        DataColumn colPos = new DataColumn("Pos", typeof(Int32));

        dt.Columns.Add(colName);
        dt.Columns.Add(colUspev);
        dt.Columns.Add(colPos);

        DataRow row = null;

        row = dt.NewRow();
        row["Kaf"] = "AOI";
        row["Uspev"] = 23;
        row["Pos"] = 54;
        dt.Rows.Add(row);

        row = dt.NewRow();
        row["Kaf"] = "SAPR";
        row["Uspev"] = 12;
        row["Pos"] = 76;
        dt.Rows.Add(row);

        return dt;
    }

    protected void Unnamed1_Click(object sender, EventArgs e)
    {
        if (FileUpload1.HasFile)
        {
            
        }
    }
}