package hrc_final_prakhar;

import java.sql.Date;

public class Invoice {
	protected int sl_no;
	protected String business_code;
	protected int cust_number;
	protected Date clear_date;
	protected int buisness_year;
	protected String doc_id;
	protected Date posting_date;
	protected Date document_create_date;
	protected Date due_in_date;
	protected String invoice_currency;
	protected String document_type;
	protected int posting_id;
	protected double total_open_amount;
	protected Date baseline_create_date;
	protected String cust_payment_terms;
	protected int invoice_id;
	
	//creating constructors for the above
	
	public Invoice(int sl_no, String business_code, int cust_number, Date clear_date, int buisness_year,
			String doc_id, Date posting_date, Date document_create_date, Date due_in_date, String invoice_currency,
			String document_type, int posting_id, double total_open_amount, Date baseline_create_date,
			String cust_payment_terms, int invoice_id) {
		
		super();
		this.sl_no=sl_no;
		this.business_code = business_code;
		this.cust_number = cust_number;
		this.clear_date = clear_date;
		this.buisness_year = buisness_year;
		this.doc_id = doc_id;
		this.posting_date = posting_date;
		this.document_create_date = document_create_date;
		this.due_in_date = due_in_date;
		this.invoice_currency = invoice_currency;
		this.document_type = document_type;
		this.posting_id = posting_id;
		this.total_open_amount = total_open_amount;
		this.baseline_create_date = baseline_create_date;
		this.cust_payment_terms = cust_payment_terms;
		this.invoice_id = invoice_id;
	}	
	
	
	
	public int getSl_no() {
		return sl_no;
	}


	public void setSl_no(int sl_no) {
		this.sl_no = sl_no;
	}


	public String getBusiness_code() {
		return business_code;
	}


	public void setBusiness_code(String business_code) {
		this.business_code = business_code;
	}


	public int getCust_number() {
		return cust_number;
	}


	public void setCust_number(int cust_number) {
		this.cust_number = cust_number;
	}


	public Date getClear_date() {
		return clear_date;
	}


	public void setClear_date(Date clear_date) {
		this.clear_date = clear_date;
	}


	public int getBuisness_year() {
		return buisness_year;
	}


	public void setBuisness_year(int buisness_year) {
		this.buisness_year = buisness_year;
	}


	public String getDoc_id() {
		return doc_id;
	}


	public void setDoc_id(String doc_id) {
		this.doc_id = doc_id;
	}


	public Date getPosting_date() {
		return posting_date;
	}


	public void setPosting_date(Date posting_date) {
		this.posting_date = posting_date;
	}


	public Date getDocument_create_date() {
		return document_create_date;
	}


	public void setDocument_create_date(Date document_create_date) {
		this.document_create_date = document_create_date;
	}


	public Date getDue_in_date() {
		return due_in_date;
	}


	public void setDue_in_date(Date due_in_date) {
		this.due_in_date = due_in_date;
	}


	public String getInvoice_currency() {
		return invoice_currency;
	}


	public void setInvoice_currency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}


	public String getDocument_type() {
		return document_type;
	}


	public void setDocument_type(String document_type) {
		this.document_type = document_type;
	}


	public int getPosting_id() {
		return posting_id;
	}


	public void setPosting_id(int posting_id) {
		this.posting_id = posting_id;
	}


	public double getTotal_open_amount() {
		return total_open_amount;
	}


	public void setTotal_open_amount(double total_open_amount) {
		this.total_open_amount = total_open_amount;
	}


	public Date getBaseline_create_date() {
		return baseline_create_date;
	}


	public void setBaseline_create_date(Date baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}


	public String getCust_payment_terms() {
		return cust_payment_terms;
	}


	public void setCust_payment_terms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}


	public int getInvoice_id() {
		return invoice_id;
	}


	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}
	
	//creating getters and setters for the above
	

}
