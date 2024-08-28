import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Input, FormLabel, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { auditorActions, communityMemberActions, investorActions, projectDeveloperActions } from '../../store';
import Metamask from '../../metamask';

// const theme = createTheme();

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isAuditorInterface, setIsAuditorInterface] = useState(true);
  const [isInvestorInterface, setIsInvestorInterface] = useState(false);
  const [isCommunityMemberInterface, setIsCommunityMemberInterface] = useState(false);

  const [walletId, setWalletId] = useState('');
  
  const [role, setRole] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [professionalCertifications, setProfessionalCertifications] = useState('');
  const [governmentIdentification, setGovernmentIdentification] = useState('');
  const [employmentVerification, setEmploymentVerification] = useState('');
  const [ethicsAndCodeOfConduct, setEthicsAndCodeOfConduct] = useState('');

  const [investorType, setInvestorType] = useState('');
  const [investorName, setInvestorName] = useState('');
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [permitsAndLicences, setPermitsAndLicences] = useState('');
  const [eiaDocuments, setEiaDocuments] = useState('');
  const [tokenWalletInformation, setTokenWalletInformation] = useState('');
  const [healthAndSafetyPolicies, setHealthAndSafetyPolicies] = useState('');
  const [businessRegistrationDocuments, setBusinessRegistrationDocuments] = useState('');
  const [financialStatements, setFinancialStatements] = useState('');
  const [proofOfCompliance, setProofOfCompliance] = useState('');
  const [ownershipInformation, setOwnershipInformation] = useState('');
  const [projectRole, setProjectRole] = useState('');
  const [isProjectDeveloper, setIsProjectDeveloper] = useState(false);
  const [description, setDescription] = useState('');
  const [sequestration, setSequestration] = useState('');
  const [scope, setScope] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [monitoring, setMonitoring] = useState('');


  const [communityAffiliation, setCommunityAffiliation] = useState('');
    const [interest, setInterest] = useState('');
  const [communicationMethod, setCommunicationMethod] = useState('');

  const [terms, setTerms] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };


  const setAuditorInterface = () => {
    setIsAuditorInterface(true);
    setIsInvestorInterface(false);
    setIsCommunityMemberInterface(false);
};

const setInvestorInterface = () => {
    setIsAuditorInterface(false);
    setIsInvestorInterface(true);
    setIsCommunityMemberInterface(false);
};

const setCommunityMemberInterface = () => {
    setIsAuditorInterface(false);
    setIsInvestorInterface(false);
    setIsCommunityMemberInterface(true);
};

    const handleTerms = () => {
        setTerms(!terms);
    };

    const handlePrivacyPolicy = () => {
        setPrivacyPolicy(!privacyPolicy);
    };


  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleWalletIdChange = (event) => {
    setWalletId(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOrganizationNameChange = (event) => {
    setOrganizationName(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleInvestorTypeChange = (event) => {
    setInvestorType(event.target.value);
  };

  const handleInvestorNameChange = (event) => {
    setInvestorName(event.target.value);
  };

  const handleProfessionalCertifications = (event) => {
    setProfessionalCertifications(event.target.files[0]);
  };

  const handleGovernmentIdentification = (event) => {
    setGovernmentIdentification(event.target.files[0]);
  };

  const handleEmploymentVerification = (event) => {
    setEmploymentVerification(event.target.files[0]);
  };

  const handleEthicsAndCodeOfConduct = (event) => {
    setEthicsAndCodeOfConduct(event.target.files[0]);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCoordinatesChange = (event) => {
    setCoordinates(event.target.value);
  };

  const handlePermissionsAndLicences = (event) => {
    setPermitsAndLicences(event.target.files[0]);
  };

  const handleEiaDocuments = (event) => {
    setEiaDocuments(event.target.files[0]);
  };

  const handleTokenWalletInformation = (event) => {
    setTokenWalletInformation(event.target.files[0]);
  };

  const handleHealthAndSafetyPolicies = (event) => {
    setHealthAndSafetyPolicies(event.target.files[0]);
  };

  const handleBusinessRegistrationDocuments = (event) => {
    setBusinessRegistrationDocuments(event.target.files[0]);
  };

  const handleFinancialStatements = (event) => {
    setFinancialStatements(event.target.files[0]);
  };

  const handleProofOfCompliance = (event) => {
    setProofOfCompliance(event.target.files[0]);
  };

  const handleOwnershipInformation = (event) => {
    setOwnershipInformation(event.target.files[0]);
  };

    const handleCommunityAffiliationChange = (event) => {
        setCommunityAffiliation(event.target.value);
    };

    const handleCommunicationMethodChange = (event) => {
        setCommunicationMethod(event.target.value);
    };

    const handleInterestChange = (event) => {
        setInterest(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSequestrationChange = (event) => {
        setSequestration(event.target.value);
    };

    const handleScopeChange = (event) => {
        setScope(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleMonitoringChange = (event) => {
        setMonitoring(event.target.value);
    };


    const handleProjectRoleChange = (event) => {
        setProjectRole(event.target.value);
        if(event.target.value === 'Project Developer'){
            setIsProjectDeveloper(true);
        } else {
            setIsProjectDeveloper(false);
        }
    };

    // const [account, setAccount] = useState(null);
    const account = useSelector((state) => state.account.account);
    const [signature, setSignature] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const metamask = new Metamask();

    // Connect MetaMask wallet
    // async function connectWallet() {
    //   setAccount(await metamask.connectWallet());
    // }

    // Sign a message to log in
    async function login() {
      try {
        const message = `Login request for ${account}`;
        
        const signature = await metamask.signMessage(message);

        setSignature(signature);
        setLoggedIn(true);

        // Now you can send the signature and account to the backend for verification
        // console.log('Signature:', signature);
      } catch (error) {
        console.error('Login failed', error);
      }
    }

    const loginRoles = ['Auditor', 'Investor', 'Project Developer', 'Community Member'];
    const [loginRole, setLoginRole] = useState('');
    const [response, setResponse] = useState();


    const [loginTriggered, setLoginTriggered] = useState(false);

    useEffect(() => {
      console.log(loginRole);
      if (loginRole) {
          if (account) {
              login();
          }
      }
    }, [loginTriggered]); 
  
    async function handleLogin(event){
        event.preventDefault();
        setLoginRole(event.target.textContent);
        setLoginTriggered(!loginTriggered);
    }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if(isLogin && account){
        login();
    } else if(isAuditorInterface){
        setResponse({
            user: 'auditor',
            walletId: walletId,
            role: role,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            organizationName: organizationName,
            jobTitle: jobTitle,
            professionalCertifications: professionalCertifications,
            governmentIdentification: governmentIdentification,
            employmentVerification: employmentVerification,
            ethicsAndCodeOfConduct: ethicsAndCodeOfConduct,
        })

        console.log(response);
        localStorage.setItem('auditorId', 'auditor');
        dispatch(auditorActions.login());  
        // navigate('/auditor/dashboard');      
    } else if(isInvestorInterface && !isProjectDeveloper){
        setResponse({
            user: 'investor',
            walletId: walletId,
            investorType: investorType,
            investorName: investorName,
            address: address,
            coordinates: coordinates,
            permitsAndLicences: permitsAndLicences,
            eiaDocuments: eiaDocuments,
            tokenWalletInformation: tokenWalletInformation,
            healthAndSafetyPolicies: healthAndSafetyPolicies,
            businessRegistrationDocuments: businessRegistrationDocuments,
            financialStatements: financialStatements,
            proofOfCompliance: proofOfCompliance,
            ownershipInformation: ownershipInformation,
            projectRole: projectRole,
        })
        
        console.log(response);
        localStorage.setItem('investorId', 'investor');
        dispatch(investorActions.login());
        // navigate('/investor/dashboard');
    } else if(isInvestorInterface && isProjectDeveloper){
        setResponse({
            user: 'projectDeveloper',
            walletId: walletId,
            investorType: investorType,
            investorName: investorName,
            address: address,
            coordinates: coordinates,
            permitsAndLicences: permitsAndLicences,
            eiaDocuments: eiaDocuments,
            tokenWalletInformation: tokenWalletInformation,
            healthAndSafetyPolicies: healthAndSafetyPolicies,
            businessRegistrationDocuments: businessRegistrationDocuments,
            financialStatements: financialStatements,
            proofOfCompliance: proofOfCompliance,
            ownershipInformation: ownershipInformation,
            projectRole: projectRole,
            description: description,
            sequestration: sequestration,
            scope: scope,
            startDate: startDate,
            endDate: endDate,
            monitoring: monitoring,
        })
        
        console.log(response);
        localStorage.setItem('projectDeveloperId', 'projectDeveloper');
        dispatch(projectDeveloperActions.login());
        // navigate('/developer/dashboard');
    } else if(isCommunityMemberInterface){
        setResponse({
            user: 'communityMember',
            walletId: walletId,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            communityAffiliation: communityAffiliation,
            interest: interest,
            communicationMethod: communicationMethod,
        })
        
        console.log(response);
        localStorage.setItem('communityMemberId', 'communityMember');
        dispatch(communityMemberActions.login());
        // navigate('/dashboard')
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: isLogin? '100vh' : isProjectDeveloper ? '180vh' : '130vh',
        }}
    >
      <Container maxWidth={isLogin ? 'xs' : 'md'}
        sx={{
            alignItems: 'center',
            bgcolor: 'background',
            boxShadow: 24,
            borderRadius: 5,
            p: 4,
        }}
      >
        <Typography variant="h2" color={colors.greenAccent[500]} align="center" gutterBottom>
          {isLogin ? 'Login' : 'Sign Up'}
        </Typography>
        {isLogin ? (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {
                    loginRoles.map((role, index) => (
                        <Button 
                            key={index}
                            // type='submit'
                            onClick={handleLogin}
                            fullWidth
                            variant="contained"
                            sx={{
                              p: 1,
                              mt: 1,
                              mb: 1,
                              color:'white',
                              fontSize: '0.8rem',
                              backgroundColor: colors.redAccent[500 + index * 100],
                              ":hover": {
                                backgroundColor: colors.blueAccent[400 + index * 100],
                              }
                            }}
                        >
                            {role}
                        </Button>
                    ))
                }
                {/* <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    color:'white',
                    backgroundColor: colors.redAccent[700],
                  }}
                >
                  Connect Your Wallet
                </Button> */}
              </Grid>
              <Grid item xs={12}>
                <Button 
                    fullWidth  
                    onClick={handleSwitch}
                    sx={{
                        color:colors.greenAccent[500],
                        // backgroundColor: 'blue',
                      }}
                >
                  Switch to Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        ) : (
          <div>
            <FormControlLabel
              control={<Checkbox 
                checked={isAuditorInterface} 
                onChange={setAuditorInterface} 
                sx={{
                    color: colors.greenAccent[500], // Change the color to red
                    '&.Mui-checked': { // Style the checked state
                    color: colors.greenAccent[500], // Change the color to green when checked
                    }
                    }}
                />}
              label="Auditor Registration"
              sx={{color:colors.greenAccent[500]}}
            />
            <FormControlLabel
              control={<Checkbox 
                checked={isInvestorInterface} 
                onChange={setInvestorInterface} 
                sx={{
                    color: colors.greenAccent[500], // Change the color to red
                    '&.Mui-checked': { // Style the checked state
                    color: colors.greenAccent[500], // Change the color to green when checked
                    }
                    }}
                />}
              label="Investor Registration"
              sx={{color:colors.greenAccent[500]}}
            />
            <FormControlLabel
              control={<Checkbox 
                checked={isCommunityMemberInterface} 
                onChange={setCommunityMemberInterface} 
                sx={{
                    color: colors.greenAccent[500], // Change the color to red
                    '&.Mui-checked': { // Style the checked state
                    color: colors.greenAccent[500], // Change the color to green when checked
                    }
                    }}
                />}
              label="Community Member Registration"
              sx={{color:colors.greenAccent[500]}}
            />
            {isAuditorInterface ? (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Auditor Type</InputLabel>
                      <Select
                        value={role}
                        onChange={handleRoleChange}
                        label="Auditor Type"
                        sx={{ bgcolor: 'background.paper'}}
                      >
                        <MenuItem value="Surveyor">Surveyor</MenuItem>
                        <MenuItem value="Regulator">Regulator</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      onChange={handleFirstNameChange}
                      fullWidth
                      variant="outlined"
                      label="First Name"
                      name="firstName"
                      sx={{ bgcolor: 'background.paper'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      onChange={handleLastNameChange}
                      fullWidth
                      variant="outlined"
                      label="Last Name"
                      name="lastName"
                      sx={{ bgcolor: 'background.paper'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      onChange={handleEmailChange}
                      fullWidth
                      variant="outlined"
                      label="Email Address"
                      name="email"
                      type="email"
                      sx={{ bgcolor: 'background.paper'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      onChange={handlePhoneNumberChange}
                      fullWidth
                      variant="outlined"
                      label="Phone Number"
                      name="phoneNumber"
                      type="tel"
                      sx={{ bgcolor: 'background.paper'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleOrganizationNameChange}
                      fullWidth
                      variant="outlined"
                      label="Organization Name"
                      name="organizationName"
                      sx={{ bgcolor: 'background.paper'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      onChange={handleJobTitleChange}
                      fullWidth
                      variant="outlined"
                      label="Job Title/Role"
                      name="jobTitle"
                      sx={{ bgcolor: 'background.paper'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      onChange={handleUsernameChange}
                      fullWidth
                      variant="outlined"
                      label="Create a Username"
                      name="username"
                      sx={{ bgcolor: 'background.paper'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      onChange={handlePasswordChange}
                      fullWidth
                      variant="outlined"
                      label="Create a Password"
                      name="password"
                      type="password"
                      sx={{ bgcolor: 'background.paper'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Professional Certifications:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleProfessionalCertifications}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Government Identification:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleGovernmentIdentification}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Employment Verification:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleEmploymentVerification}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Ethics and Code of Conduct Acknowledgment:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleEthicsAndCodeOfConduct}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} align="left">
                    <FormControlLabel
                        required                    
                        fullWidth
                        control={<Checkbox 
                            checked={terms} 
                            onChange={handleTerms} 
                            sx={{
                                color: colors.greenAccent[500], // Change the color to red
                                '&.Mui-checked': { // Style the checked state
                                color: colors.greenAccent[500], // Change the color to green when checked
                                }
                            }}
                        />}
                        label="I agree with the Terms and Conditions"
                        sx={{color:colors.greenAccent[500]}}
                    />
                  </Grid>

                  <Grid item xs={12} align="left">
                    <Typography variant="h6" sx={{color: colors.greenAccent[500]}}> Instructions on the verification process and required documentation:</Typography>
                    <ul>
                        <Typography variant="subtitle1" sx={{color: colors.greenAccent[500]}}><li>Description of rule 1</li></Typography>
                        <Typography variant="subtitle1" sx={{color: colors.greenAccent[500]}}><li>Description of rule 2</li></Typography>
                        <Typography variant="subtitle1" sx={{color: colors.greenAccent[500]}}><li> Description of rule 3</li></Typography>
                      {/* Add more rules as needed */}
                    </ul>
                  </Grid>
                  
                  <Grid item xs={12} align="left">
                    <FormControlLabel
                        required                    
                        fullWidth
                        control={<Checkbox 
                            checked={privacyPolicy} 
                            onChange={handlePrivacyPolicy} 
                            sx={{
                                color: colors.greenAccent[500], // Change the color to red
                                '&.Mui-checked': { // Style the checked state
                                color: colors.greenAccent[500], // Change the color to green when checked
                                }
                            }}
                        />}
                        label="I have read and agree to the Privacy Policy"
                        sx={{color:colors.greenAccent[500]}}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        color:'white',
                        backgroundColor: colors.redAccent[700],
                      }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth onClick={handleSwitch} sx={{color:colors.greenAccent[500]}}>
                      Switch to Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            ) : isCommunityMemberInterface ? (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleFirstNameChange}
                        fullWidth
                        variant="outlined"
                        label="First Name of Community Member"
                        name="communityMemberFirstName"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleLastNameChange}
                        fullWidth
                        variant="outlined"
                        label="Last Name of Community Member"
                        name="CommunityMemberLastName"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleEmailChange}
                        fullWidth
                        variant="outlined"
                        label="Email"
                        name="email"
                        type="email"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handlePhoneNumberChange}
                        fullWidth
                        variant="outlined"
                        label="Phone Number"
                        name="phoneNumber"
                        type="tel"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        onChange={handleAddressChange}
                        fullWidth
                        variant="outlined"
                        label="Address"
                        name="address"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={handleCommunityAffiliationChange}
                        fullWidth
                        variant="outlined"
                        label="Community Affiliation"
                        name="communityAffiliation"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        onChange={handleInterestChange}
                        fullWidth
                        variant="outlined"
                        label="Interest in Specific Projects or Sectors"
                        name="interest"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>

                    <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Preferred Method of Communication</InputLabel>
                      <Select
                        value={communicationMethod}
                        onChange={handleCommunicationMethodChange}
                        label="Communication Method"
                        sx={{ bgcolor: 'background.paper'}}
                      >
                        <MenuItem value="Forums">Forums</MenuItem>
                        <MenuItem value="Newsletters">Newsletters</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleUsernameChange}
                        fullWidth
                        variant="outlined"
                        label="Create a Username"
                        name="username"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handlePasswordChange}
                        fullWidth
                        variant="outlined"
                        label="Create a Password"
                        name="password"
                        type="password"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>

                  <Grid item xs={12} sm={6} align="left">
                    <FormControlLabel
                        required                    
                        fullWidth
                        control={<Checkbox
                             checked={terms} 
                             onChange={handleTerms} 
                             sx={{
                                color: colors.greenAccent[500], // Change the color to red
                                '&.Mui-checked': { // Style the checked state
                                color: colors.greenAccent[500], // Change the color to green when checked
                                }
                                }}
                             />}
                        label="I agree with the Terms and Conditions"
                        sx={{color:colors.greenAccent[500]}}
                    />
                  </Grid>

                  <Grid item xs={12} align="left" sx={{color:colors.greenAccent[500]}}>
                    <Typography variant="h6"> Instructions on the verification process and required documentation:</Typography>
                    <ul>
                        <Typography variant="subtitle1"><li>Description of rule 1</li></Typography>
                        <Typography variant="subtitle1"><li>Description of rule 2</li></Typography>
                        <Typography variant="subtitle1"><li> Description of rule 3</li></Typography>
                      {/* Add more rules as needed */}
                    </ul>
                  </Grid>
                  
                  <Grid item xs={12} align="left">
                    <FormControlLabel
                        required                    
                        fullWidth
                        control={<Checkbox 
                            checked={privacyPolicy} 
                            onChange={handlePrivacyPolicy} 
                            sx={{
                                color: colors.greenAccent[500], // Change the color to red
                                '&.Mui-checked': { // Style the checked state
                                color: colors.greenAccent[500], // Change the color to green when checked
                                }
                                }}
                            />}
                        label="I have read and agree to the Privacy Policy"
                        sx={{color:colors.greenAccent[500]}}
                    />
                  </Grid>
                  {/* Include investor registration fields */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        color:'white',
                        backgroundColor: colors.redAccent[700],
                      }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth onClick={handleSwitch} sx={{color:colors.greenAccent[500]}}>
                      Switch to Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            ) : (
                <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Investor Type</InputLabel>
                      <Select
                        value={investorType}
                        onChange={handleInvestorTypeChange}
                        label="Investor Type"
                        sx={{ bgcolor: 'background.paper'}}
                      >
                        <MenuItem value="Textile">Textile</MenuItem>
                        <MenuItem value="Chemical">Chemical</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleInvestorNameChange}
                        fullWidth
                        variant="outlined"
                        label="Investor Name"
                        name="investorName"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleFirstNameChange}
                        fullWidth
                        variant="outlined"
                        label="First Name of Investor Owner"
                        name="ownerFirstName"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleLastNameChange}
                        fullWidth
                        variant="outlined"
                        label="Last Name of Investor Owner"
                        name="ownerLastName"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleEmailChange}
                        fullWidth
                        variant="outlined"
                        label="Email"
                        name="email"
                        type="email"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handlePhoneNumberChange}
                        fullWidth
                        variant="outlined"
                        label="Phone Number"
                        name="phoneNumber"
                        type="tel"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        onChange={handleAddressChange}
                        fullWidth
                        variant="outlined"
                        label="Address"
                        name="address"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={handleCoordinatesChange}
                        fullWidth
                        variant="outlined"
                        label="Geographical Coordinates"
                        name="coordinates"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>

                    <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Role</InputLabel>
                      <Select
                        required
                        value={projectRole}
                        onChange={handleProjectRoleChange}
                        label="Role"
                        sx={{ bgcolor: 'background.paper'}}
                      >
                        <MenuItem value="Investor">Investor</MenuItem>
                        <MenuItem value="Project Developer">Project Developer</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                    {isProjectDeveloper && (
                        <Grid item xs={12}>
                            <TextField
                                required
                                multiline
                                onChange={handleDescriptionChange}
                                fullWidth
                                variant="outlined"
                                label="Description of the Carbon Reduction Project"
                                name="description"
                                sx={{ bgcolor: 'background.paper'}}
                            />
                        </Grid>
                    )}

                    {isProjectDeveloper && (
                        <Grid item xs={12}>
                            <TextField
                                required
                                type="number"
                                onChange={handleSequestrationChange}
                                fullWidth
                                variant="outlined"
                                label="Expected CO2 Sequestration (metric tons per year)"
                                name="sequestration"
                                sx={{ bgcolor: 'background.paper'}}
                            />
                        </Grid>
                    )}

                    {isProjectDeveloper && (
                        <Grid item xs={12}>
                            <TextField
                                required
                                multiline
                                onChange={handleScopeChange}
                                fullWidth
                                variant="outlined"
                                label="Project Location and Scope"
                                name="scope"
                                sx={{ bgcolor: 'background.paper'}}
                            />
                        </Grid>
                    )}

                    {isProjectDeveloper && (
                        <>
                            <Grid item xs={12}>
                                <Typography variant="h6" sx={{color: colors.greenAccent[500]}}>
                                    Implementation Timeline:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    helperText="Start Date"
                                    type="date"
                                    onChange={handleStartDateChange}
                                    fullWidth
                                    variant="outlined"
                                    // label="Start Date"
                                    name="startDate"
                                    sx={{ bgcolor: 'background.paper'}}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    helperText="End Date"
                                    type="date"
                                    onChange={handleEndDateChange}
                                    fullWidth
                                    variant="outlined"
                                    // label="End Date"
                                    name="endDate"
                                    sx={{ bgcolor: 'background.paper'}}
                                />
                            </Grid>
                        </>
                    )}

                    {isProjectDeveloper && (
                        <Grid item xs={12}>
                            <TextField
                                required
                                multiline
                                onChange={handleMonitoringChange}
                                fullWidth
                                variant="outlined"
                                label="Monitoring and Reporting Plan"
                                name="monitoring"
                                sx={{ bgcolor: 'background.paper'}}
                            />
                        </Grid>
                    )}
                    
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleUsernameChange}
                        fullWidth
                        variant="outlined"
                        label="Create a Username"
                        name="username"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handlePasswordChange}
                        fullWidth
                        variant="outlined"
                        label="Create a Password"
                        name="password"
                        type="password"
                        sx={{ bgcolor: 'background.paper'}}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Business Registration Documents:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleBusinessRegistrationDocuments}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Environmental Impact Assessment (EIA) Reports:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleEiaDocuments}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Proof of Compliance with Regulatory Standards:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleProofOfCompliance}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}> Ownership Information:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleOwnershipInformation}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}> Financial Statements:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleFinancialStatements}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Permits and Licenses:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handlePermissionsAndLicences}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Token Wallet Information:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleTokenWalletInformation}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel align="left" sx={{color:colors.greenAccent[500]}}>Health and Safety Policies:</InputLabel>
                    <FormControl fullWidth>      
                      <Input
                        type="file"
                        onChange={handleHealthAndSafetyPolicies}
                        inputProps={{ accept: '.pdf' }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} align="left">
                    <FormControlLabel
                        required                    
                        fullWidth
                        control={<Checkbox 
                            checked={terms} 
                            onChange={handleTerms} 
                            sx={{
                                color: colors.greenAccent[500], // Change the color to red
                                '&.Mui-checked': { // Style the checked state
                                color: colors.greenAccent[500], // Change the color to green when checked
                                }
                            }}
                        />}
                        label="I agree with the Terms and Conditions"
                        sx={{color:colors.greenAccent[500]}}
                    />
                  </Grid>

                  <Grid item xs={12} align="left" sx={{color:colors.greenAccent[500]}}>
                    <Typography variant="h6"> Instructions on the verification process and required documentation:</Typography>
                    <ul>
                        <Typography variant="subtitle1"><li>Description of rule 1</li></Typography>
                        <Typography variant="subtitle1"><li>Description of rule 2</li></Typography>
                        <Typography variant="subtitle1"><li> Description of rule 3</li></Typography>
                      {/* Add more rules as needed */}
                    </ul>
                  </Grid>
                  
                  <Grid item xs={12} align="left">
                    <FormControlLabel
                        required                    
                        fullWidth
                        control={<Checkbox 
                            checked={privacyPolicy} 
                            onChange={handlePrivacyPolicy} 
                            sx={{
                                color: colors.greenAccent[500], // Change the color to red
                                '&.Mui-checked': { // Style the checked state
                                color: colors.greenAccent[500], // Change the color to green when checked
                                }
                            }}
                        />}
                        label="I have read and agree to the Privacy Policy"
                        sx={{color:colors.greenAccent[500]}}
                    />
                  </Grid>
                  {/* Include investor registration fields */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        color:'white',
                        backgroundColor: colors.redAccent[700],
                      }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth onClick={handleSwitch} sx={{color:colors.greenAccent[500]}}>
                      Switch to Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
                )}
          </div>
        )}
      </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
