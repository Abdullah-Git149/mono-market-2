import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminApproval, userlist } from "../../actions/userAction";
import toast, { Toaster } from "react-hot-toast";

const UserList = () => {
  const { users, newUser, adminApprovalStatus } = useSelector(
    (state) => state.userReducer
  );
  //console.log('login user data',user._id);
  const [tablebody, setTableBody] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (newUser) {
      toast.success(newUser.message);
    }
    dispatch(userlist());
  }, [newUser]);

  const changeStatus = (user_id) => {
    dispatch(adminApproval(user_id));
    dispatch(userlist());
  };

  useEffect(() => {
    if (adminApprovalStatus) {
      toast.success(adminApprovalStatus.msg);
    }
  }, [adminApprovalStatus]);
  // Data Table work
  useEffect(() => {
    const userDataFiltered = users?.map((x) => {
      let jsx = (
        <>
          {/* <button onClick={(e) => changeStatus(x._id)} className="btn btn-primary" disabled={x.admin_approved == 1 ? true : false} style={{marginLeft:10}}>{x.admin_approved == 1 ? 'Approved' : 'Not Approved'}</button> */}
          <Link to={`survey-report/${x._id}`}>
            <button
              type="button"
              className="btn btn-sm btn-default"
              title="Details"
              data-for="send"
              data-tip="true"
              currentitem="false"
            >
              <i className="icon-envelope"></i>
            </button>
          </Link>
          <button
            onClick={(e) => changeStatus(x._id)}
            type="button"
            className="btn btn-sm btn-default"
            title="Order Details"
            data-for="send"
            data-tip="true"
            currentitem="false"
          >
            <i className="icon-trash"></i>
          </button>
          <Link to={`audit-report/${x._id}`}>
            <button
              type="button"
              className="btn btn-sm btn-default"
              title="Audit Report"
              data-for="send"
              data-tip="true"
              currentitem="false"
            >
              <i className="icon-envelope"></i>
            </button>
          </Link>
        </>
      );

      for (const [key, value] of Object.entries(x)) {
        if (value === null) {
          x[key] = undefined;
        }
      }
      x.action = jsx;
      return x;
    });

    setTableBody({
      columns: [
        {
          label: "User Name",
          field: "user_fullname",
          width: 150,
        },
        {
          label: "User Email",
          field: "user_email",
          width: 150,
        },
        {
          label: "Action",
          field: "action",
          width: 10,
        },
      ],

      rows: userDataFiltered ? userDataFiltered : [],
    });
  }, [users]);

  return (
    <>
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header" style={{ marginTop: 20 }}>
              <h4>User List </h4>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  style: {
                    border: "1px solid #713200",
                    padding: "16px",
                    color: "#713200",
                    fontSize: "17px",
                  },
                }}
              />
            </div>
            <div className="body">
              <div className="table-responsive">
                {users?.length && (
                  <MDBDataTableV5
                    noBottomColumns
                    className="table table-hover js-basic-example dataTable table-custom spacing5"
                    entriesOptions={[5, 10, 20, 25]}
                    entries={10}
                    paging
                    pagesAmount={15}
                    data={tablebody}
                    // searchTop
                    sortRows={["user_email"]}
                    //searchBottom={true}
                    // onPageChange={()=>{ activePage: 2, pagesAmount: 5 }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserList;
