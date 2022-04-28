package hrc_final_prakhar;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.*;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class EditServlet
 */
@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object,Object>Response =new HashMap<Object,Object>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection =DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","Prakhar@sql");
			String payment_terms=request.getParameter("cust_payment_terms");
			String invoice_currency=request.getParameter("invoice_currency");
			int sl_no=Integer.parseInt(request.getParameter("sl_no"));
			String sql_statement="UPDATE winter_internship SET cust_payment_terms=?,invoice_currency=? WHERE sl_no=?";
			
			PreparedStatement ps=connection.prepareStatement(sql_statement);
			ps.setString(1,payment_terms);
			ps.setString(2,invoice_currency);
			ps.setInt(3,sl_no);
			
			  if(ps.executeUpdate()>0) {
		          Response.put("UPDATE", true);
		        }else {
		          Response.put("UPDATE", false);
		        }
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
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
