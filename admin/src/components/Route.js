import UserList from './Users/userList';
import UserServey from './Users/UserServey';
import SurveyDetail from './Users/SurveyDetail';
import AuditReport from './Users/AuditReport';
import AuditImages from './Users/AuditImages';
import CompanyList from './Users/CompanyList';
import AddCompany from './Users/AddCompany';
import Dashboard from './Dashboard/dashboard';
import CategoryList from './Product/CategoryList';
import ProductList from './Product/ProductList';
import AddCategory from './Product/AddCategory';
import QuestionList from './Product/QuestionList';
import AddQuestion from './Product/AddQuestion';
import AddProduct from './Product/AddProduct';
import ProductDetail from './Product/ProductDetail';
import PP from './Agency/PP';
import TC from './Agency/TC';



const Routes = [
   
    {
        path: "/user-list",
        name: 'Users',
        exact: true,
        pageTitle: "UserList",
        //isPrivate: true,
        component: UserList
    },                                
    {
        path: "/company-list",
        name: 'CompanyList',
        exact: true,
        pageTitle: "CompanyList",
        //isPrivate: true,
        component: CompanyList
    },                                
    {
        path: "/add-company",
        name: 'AddCompany',
        exact: true,
        pageTitle: "AddCompany",
        //isPrivate: true,
        component: AddCompany
    },   
    {
        path: "/add-company/:edit?",
        name: 'AddCompany',
        exact: true,
        pageTitle: "AddCompany",
        component: AddCompany
    },                             
    {
        path: "/category-list",
        name: 'Category',
        exact: true,
        pageTitle: "Category",
        component: CategoryList
    },
    {
        path: "/category-add",
        name: 'AddCategory',
        exact: true,
        pageTitle: "AddCategory",
        component: AddCategory
    },
    {
        path: "/question-list",
        name: 'QuestionList',
        exact: true,
        pageTitle: "QuestionList",
        component: QuestionList
    },
    {
        path: "/question-add",
        name: 'AddQuestion',
        exact: true,
        pageTitle: "AddQuestion",
        component: AddQuestion
    },
    {
        path: "/survey-report/:user_id?",
        name: 'UserServey',
        exact: true,
        pageTitle: "UserServey",
        component: UserServey
    },
    {
        path: "/survey-detail/:product_id?",
        name: 'SurveyDetail',
        exact: true,
        pageTitle: "SurveyDetail",
        component: SurveyDetail
    },
    {
        path: "/audit-report/:user_id?",
        name: 'AuditReport',
        exact: true,
        pageTitle: "AuditReport",
        component: AuditReport
    },
    {
        path: "/audit-images/:hf_id?",
        name: 'AuditImages',
        exact: true,
        pageTitle: "AuditImages",
        component: AuditImages
    },
    {
        path: "/category-add/:edit?",
        name: 'AddCategory',
        exact: true,
        pageTitle: "AddCategory",
        component: AddCategory
    },
    {
        path: "/product-list",
        name: 'Products',
        exact: true,
        pageTitle: "Products",
        component: ProductList
    },
    {
        path: "/product-add",
        name: 'AddProduct',
        exact: true,
        pageTitle: "AddProduct",
        component: AddProduct
    },
    {
        path: "/product-add/:edit?",
        name: 'AddProduct',
        exact: true,
        pageTitle: "AddProduct",
        component: AddProduct
    }, 
    {
        path: "/product-details/:product_id?",
        name: 'Product Details',
        exact: true,
        pageTitle: "Product Details",
        component: ProductDetail
    },       
    {
        path: "/pp",
        name: 'Privacy Policy',
        exact: true,
        pageTitle: "Privacy Policy",
        component: PP
    }, 
    {
        path: "/tc",
        name: 'Terms & Condition',
        exact: true,
        pageTitle: "Terms & Condition",
        component: TC
    }, 
    {
        path: "/dashboard",
        name: 'Dashboard',
        exact: true,
        pageTitle: "Dashboard",
        component: Dashboard
    }
    
];

export default Routes;