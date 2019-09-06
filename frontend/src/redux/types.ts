import { RouterState } from 'connected-react-router';
import { ToastrState } from 'react-redux-toastr';
import { PersistPartial } from 'redux-persist/lib/persistReducer';
import { LeadAction, LeadState } from 'redux/lead';
import { AuditResultsAction, AuditResultsState } from './auditResults';
import { ContentAction, ContentState } from './content';
import { AuditParametersAction, AuditParametersState } from './entities/auditParameters';
import { AuditsAction, AuditsState } from './entities/audits';
import { AuditStatusHistoriesAction, AuditStatusHistoriesState } from './entities/auditStatusHistories/reducer';
import { PagesAction, PagesState } from './entities/pages';
import { ProjectsAction, ProjectsState } from './entities/projects';
import { ScriptsAction, ScriptsState } from './entities/scripts';
import { LoginAction, LoginState } from './login';
import { ParametersAction, ParametersState } from './parameters';
import { SignUpAction, SignUpState } from './sign-up';
import { UserAction, UserState } from './user';

export type RootState = Readonly<{
  lead: LeadState;
  login: LoginState & PersistPartial;
  signUp: SignUpState;
  parameters: ParametersState & PersistPartial;
  entities: {
    projects: ProjectsState;
    pages: PagesState;
    scripts: ScriptsState;
    audits: AuditsState;
    auditParameters: AuditParametersState;
    auditStatusHistories: AuditStatusHistoriesState;
  };
  auditResults: AuditResultsState;
  user: UserState;
  content: ContentState & PersistPartial;
  toastr: ToastrState;
}>;
// This type allows url fetching from anywhere without modifying the RootState
export type RootStateWithRouter = RootState & Readonly<{ router: RouterState }>;

export type RootAction =
  | LeadAction
  | LoginAction
  | SignUpAction
  | ParametersAction
  | ProjectsAction
  | PagesAction
  | ScriptsAction
  | AuditsAction
  | AuditParametersAction
  | AuditStatusHistoriesAction
  | AuditResultsAction
  | UserAction
  | ContentAction;
