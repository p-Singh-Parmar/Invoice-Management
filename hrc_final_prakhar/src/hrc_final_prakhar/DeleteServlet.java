package hrc_final_prakhar;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import java.sql.*;

/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet("/DeleteServlet")
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object,Object> Response = new  HashMap<Object,Object>();
			try {
				//Driver connect jdbc
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection connection =DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","Prakhar@sql");
				// Now create SQL Statement
				int sl_no=Integer.parseInt(request.getParameter("sl_no"));
				String sql_query="DELETE from winter_internship WHERE sl_no=?";
				 
				
				PreparedStatement ps=connection.prepareStatement(sql_query);
				ps.setInt(1,sl_no);
				if(ps.executeUpdate()>0)
				{
					Response.put("DELETE",true);
				}
				else
				{
					Response.put("DELETE",false);
				}
				
				
				Gson gson=new Gson();    
				
				String jsonResponse = gson.toJson(Response);
				response.setHeader("Access-Control-Allow-Origin", "*"); // CORS Error
				response.getWriter().append(jsonResponse);
				
			}
			catch(Exception e)
			{
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
