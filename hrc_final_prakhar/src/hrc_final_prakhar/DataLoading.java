package hrc_final_prakhar;

import java.io.IOException;
import java.sql.*;
import java.sql.Date;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

//import hrc_final_prakhar.main.Invoice;

/**
 * Servlet implementation class DataLoading
 */
@WebServlet("/DataLoading")
public class DataLoading extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public DataLoading() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object,Object>Response=new HashMap<Object,Object>();
		ArrayList<Invoice> Invoices=new ArrayList<Invoice>();
		try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection =DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose?zeroDateTimeBehavior=convertToNull","root","Prakhar@sql");
		PreparedStatement ps=connection.prepareStatement("select * from winter_internship");
		ResultSet rs=ps.executeQuery();
		while(rs.next())
		{ 
			int sl_no=rs.getInt("sl_no");
			String business_code = rs.getString("business_code");
			int cust_number = rs.getInt("cust_number");
			Date clear_date = rs.getDate("clear_date");
			int buisness_year = rs.getInt("buisness_year");
			String doc_id = rs.getString("doc_id");
			Date posting_date = rs.getDate("posting_date");
			Date document_create_date = rs.getDate("document_create_date");
			Date due_in_date = rs.getDate("due_in_date");
			String invoice_currency = rs.getString("invoice_currency");
			String document_type = rs.getString("document_type");
			int posting_id = rs.getInt("posting_id");
			double total_open_amount = rs.getDouble("total_open_amount");
			Date baseline_create_date = rs.getDate("baseline_create_date");
			String cust_payment_terms = rs.getString("cust_payment_terms");
			int invoice_id = rs.getInt("invoice_id");
	
			Invoice invoice=new Invoice(sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id);//added in array list named users
			Invoices.add(invoice);   //putting values inside list
		}
		Response.put("invoices", Invoices);   // putting list inside hashmap
		}
	
		catch(Exception e)
		{
			e.printStackTrace();
		}
		// CORS POLICY --ISSUE
		
		
		Gson gson=new Gson();    
		
		String jsonResponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin", "*"); // CORS Error
		response.getWriter().append(jsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
