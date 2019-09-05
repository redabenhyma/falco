import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from 'redux/types';

import { addMemberToProjectRequest, deleteMemberOfProjectRequest, editMemberOfProjectRequest, fetchProjectsRequest, setToastrDisplay } from 'redux/entities/projects';
import { getProject, getToastrDisplay } from 'redux/entities/projects/selectors';
import { ToastrDisplayType } from 'redux/entities/projects/types';
import { getUser } from 'redux/user/selectors';
import ProjectSettings, { OwnProps } from './ProjectSettings';

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  currentUser: getUser(state),
  project: getProject(state, props.match.params.projectId),
  toastrDisplay: getToastrDisplay(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchProjectsRequest: (projectId: string) => dispatch(fetchProjectsRequest({ currentProjectId: projectId })),
  addMemberToProject: (projectId: string, userId: string) => dispatch(addMemberToProjectRequest({ projectId, userId })),
  removeMemberOfProjectRequest: (projectId: string, userId: string) => dispatch(deleteMemberOfProjectRequest({ projectId, userId })),
  editMemberOfProjectRequest: (projectId: string, userId: string, isAdmin: boolean) => 
    dispatch(editMemberOfProjectRequest({ projectId, userId, isAdmin })),
  setToastrDisplay: (toastrDisplay: ToastrDisplayType) => dispatch(setToastrDisplay({ toastrDisplay })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(ProjectSettings));
